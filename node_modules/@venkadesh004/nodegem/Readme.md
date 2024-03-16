<h1>Node module for google ecosystem with Gemini AI</h1>
<p>We build a ecosystem for google drive service to access that drive using gemini with these we create,update,download,read that drive which can access images and vedios,which can only be send as prompt.There are also some built in parameter,Every prompt we send to the model includes parameter values that control how the model generates a response.The model can generate different results for different parameter values.The most comman model paremeters are:</p>
<ol>Max output token</ol>
<ol>Temperature</ol>
<ol>topK</ol>
<ol>topP</ol>
<ol>stop_sequences</ol>

<b>Max output tokens:</b>

<p>Specifics the maximum number of tokkens that can be generated in the response.A token is approximately four characters.100 tokens corresponds to roughly 80 words.</p>

<b>Temperature:</b>

<p>The temperature controls sthe degree of randomness in tokens selection.The temperature is used for sampling during responce generation,which occurs when topP and topK are applied.Lower temperatures are good for prompts that require a more deterministic or less open-ended response,while higher temperatures can lead to more diverse or creative results.A temperature of 0 is deterministic,meaning that the highest probabity response is always selected.</p>

<b>topK:</b>

<p>The topK parameter changes how teh model selects tokens for output.A topK of 1 means the selected token is the most probable among all the next thr tokens in the model's vocabulary also called greedy decoding,while a topK of 3 means that the next token is selected from among the 3 most protable using the temperature.For each token selection step,the topK tokens with the highest probabilities are sampled.Tokens are then futher filtered based on topP with the final token selected using temperature sampling.</p>

<b>topP:</b>

<p> The topP parameter changes how the model selects tokens for output.Tokena are selected from the most to least probable untill the sum of their probabilities equals the topP value.For example,if tokens A,B and C have a probability of 0.3,0.2 and 0.1 and the topP values is 0.5,then the model will select either A or B as the next token by using the temperature and exclude C as a candidate.The default topP value is 0.95.</p>

<b>stop_sequence:</b>

<p>Seta stop sequence to tell the model to stop generating content.A stop sequence can be any sequence of characters.Try to avoid using a sequence of chaarcters that may appear in the generated content.
</p>

<h3>Categories to that makes gemini ,good</h3>
<b>Harassment:</b>
<p>Negative or harmful comments targeting identity and/or protected attributes.</p>
<b>Hate speech:</b>
<p>Content that is rude,disrespectful, or profane.</p>
<b>Sexually explicit:</b>
<p>Contains references to sexual acts or other lewd content.</p>
<b>Dangerous:</b>
<p>Promotes,facilitates or encourage harmful acts.</p>

<h3>Threshold for google AI studio:</h3>
<b>BLOCK_NONE</b>
<p>Always show regardless of probability of unsafe content</p>
<b>BLOCK_ONLY_HIGH</b>
<p>Block when medium or high probability of unsafe content.</p>
<b>BLOCK_MEDIUM_AND_ABOVE</b>
<p>Block when low,medium or high probability of unsafe content.</p>
<b>HARM_BLOCK_THRESHOLD_UNSPECIFIED</b>
<p>Threshold is unspecified,block using default threshold</p>
<h3>Probabilities</h3>
<ol><b>Negligible</b></ol>
<p>Content has a negligible probability of being unsafe</p>
<ol><b>low</b></ol>
<p>Content has a low probability of being unsafe</p>
<ol><b>Medium</b></ol>
<p>Content has a medium probability of being unsafe</p>
<ol><b>High</b></ol>
<p>Content has a high probability of being unsafe</p>

<h3>For experiencing this we create a react web appliation for a e-commerce</h3>

<p>We create a basic web appliaction for e-commerce conatains a login and file upload page with fully validated.From this website we are trying to get the use our developing module for example nowadays cloth making shops for upto the trend becomes most popular.So we taken that as our example business model because that particular brand can't do best or exceptionally well in both clothing and branding theirs to incraese the sales.For being better in branding and searching off we provides keywords that will be useful for both enduser and that particular brand company from that image prompt from that we access from google drive not a direct prompt we access it and give discription and related features about it.So that brand cant be worried about the marketting and branding meanwhile it also helps for the customers to get the expected things in right time. For provide these kinds of services we  initialise API keys and access the google drive using that and gemini ai in that ,fetch the both to get results that we expected.Here we transfer all the images and info by streams and get as or stored in buffer for arranging the different colections of data in a better way.For google authentication we use two methods oath 2.0 and service accounts,for that service account we create a private key to access JWT (jeson web tokens) that is used for client verification.These are for service accounts.For outh  2.0 we have to create a new project and we have to redirect the URL's and now we have to download the credentials.Using connectAuthClient ,that provides two forms of security for session management, including the Internet Identity delegation. for that connectAuthClient function we have three parameters which are Tokens_path,Credentials_path,scopes. Here Token_path refers to path loaction of token.js and Credentials_path are refers to path there credentials are been there.Lastly we have scope that refers to the OAuth 2.0 scopes that you might need to request to access Google APIs, depending on the level of access you need. Sensitive scopes require review by Google and have a sensitive indicator on the Google Cloud Console's OAuth consent screen configuration page. Many scopes overlap, so it's best to use a scope that isn't sensitive.If your public application uses scopes that permit access to certain user data, it must complete a verification process. If you see unverified app on the screen when testing your application, you must submit a verification request to remove it.</p>