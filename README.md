
<img width="742" alt="image" src="https://github.com/user-attachments/assets/24547ae5-8095-4c2f-88d9-3e01726a8ec2" />


<img width="837" alt="image" src="https://github.com/user-attachments/assets/4ea8bbfb-0279-40fd-9279-f82ec43a61f4" />




----------------------------------------------------------------------------------------------------------------------
USELESS FUN FACT:)
<img width="730" alt="image" src="https://github.com/user-attachments/assets/0e70c2a5-f415-4efa-a496-b21b59d38e16" />

<img width="602" alt="image" src="https://github.com/user-attachments/assets/7b0fce8a-8d84-4db6-8eec-0f39830a0123" />


__Reflections__

When we reformat data from the "Useless Facts API" before sending it to the client, we are creating a controlled interface
betwwen our application and the external service. External APIs usually include alot of information that our frontend does
not need (extra fields, inconsistent naming, internal metadata). By reformatting the response, we can decide exactly
what data reaches our client. This keeps our API stable even if and when the external service changes their response format.
This also reduces the amount of data traveling over the network, which is great to ensure good performance.
Also, external APIs can at times leak internal information in their responses. When we filter and reformat, we only expose
the data that is actually necessary for our application.

Raw axios error objects contain implementation details that our users can't see. Alot gets bundled into these error objects
(stack traces, server configurations, API endpoints, and some authentication info). A generic message like "unable to fetch data" gives our
users the info they need without exposing our backend arhitecture.   Logging the complete error details on our server for debugging reasons.

Generic errors also create a consistency in our API, When frontend developers know that they will always receive the same error format 
they can write cleaner error handling code.

Adding Language Support: if the external API supported language parameter, we could add this feature through query parameters:
const lanugage = req.uery.language || "en";
const response = await 
axios.get(`https://uselessfacts.jsph.pl/random.json?language=${language}`);

we would want to validate the language parametter against a list of supported languages before making an API call. This will
prevent invaild language codes from causing errors. Handling language selection in our backend allows us to add features like 
automatic fallbacks.  If someone requests an unsupported language you could default to English instead of returning an error.

