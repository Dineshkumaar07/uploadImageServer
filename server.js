const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { NodeGem } = require("@venkadesh004/nodegem/dist/index");
const fs = require("fs");

const Product = require("./model/productSchema");

dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const pKey = require("./pKey.json");
const { upload } = require("./middleware/upload");
const { default: mongoose } = require("mongoose");
// console.log(pKey.private_key === process.env.PRIVATEKEY.toString());

const nodeGemApp = new NodeGem(process.env.GEMINIAPIKEY, "gemini-pro-vision");
nodeGemApp.connectServiceAccount(
  process.env.CLIENTID,
  null,
  process.env.PRIVATEKEY,
  ["https://www.googleapis.com/auth/drive"]
);

app.post(
  "/upload",
  upload.single("file"),
  async (req, res) => {
    const file = req.file;
    const { price } = req.body;
    try {
      await nodeGemApp
        .uploadFile("./images/" + file.originalname)
        .then(async (resultOld) => {
          nodeGemApp.switchModel("gemini-pro-vision");
          await nodeGemApp
            .useTextAndImage(
              [[`./images/${file.originalname}`, `${file.mimetype}`]],
              false,
              "Describe the cloth from the photo like a seller with 20 words "
            )
            .then(async (desp) => {
              nodeGemApp.switchModel("gemini-pro");
              await nodeGemApp
                .generateContent(
                  [
                    desp,
                    "Get the Keywords in a single line separated by a (,) comma",
                  ],
                  false
                )
                .then(async (output) => {
                  await Product.create({
                    filename: file.originalname,
                    fileId: resultOld,
                    price: price,
                    description: desp,
                    keywords: output.split(","),
                  })
                    .then((resultNew) => {
                      fs.unlinkSync("./images/" + file.originalname);
                      res.status(200).json({ msg: "success" });
                    })
                    .catch((err) => {
                      res.status(400).json({ msg: "error" });
                    });
                })
                .catch((err) => {
                  res.status(400).json({ msg: "error" });
                });
            });
        });
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(400).send({ msg: "Error" });
    }
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

// uploadFile("shirt.png");

app.get("/products", async (req, res) => {
  await nodeGemApp.listFiles(5).then((result) => {
    res.json(result);
  });
});

try {
  mongoose.connect("mongodb://localhost:27017").then((result) => {
    console.log("DB Connected!");
    app.listen(process.env.PORT, () => {
      console.log("Server Started on PORT: " + process.env.PORT);
    });
  });
} catch (err) {
  console.log(err);
}
