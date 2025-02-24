// file: /pages/api/openai.js

import { Configuration, OpenAIApi } from "openai";
import { getSystemPrompt, getFunctions } from "../../prompts/promptUtils";

// Create a configuration object with the OpenAI API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
// Create an instance of the OpenAIApi using the configuration
const openai = new OpenAIApi(configuration);

/**
 * Handle the API request
 * @param {object} req - The HTTP request object
 * @param {object} res - The HTTP response object
 */
export default async function (req, res) {
  // Check if the OpenAI API key is configured
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  // Extract the payload from the request body
  const { useCase, userMessage } = req.body.payload || "";
  console.log("The userMessage is: ", userMessage);

  try {
    const systemMessage = getSystemPrompt(useCase);
    const functions = getFunctions(useCase);
    const messages = [systemMessage, userMessage];

    console.log("The messages sent to OpenAI API: ", messages);

    // Call the OpenAI API to create a chat completion
    const completion = await openai.createChatCompletion({
      model: "gpt-4o",
      messages: messages,
      functions: functions,
      temperature: 1,
      max_tokens: 510,
      top_p: 0,
    });

    const resultContent = completion.data.choices[0].message.content;
    console.log("Data from OpenAI API: ", resultContent);
    res.status(200).json({ result: resultContent });
  } catch (error) {
    if (error.response) {
      // If there's a response error, log and return the error message
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      // If there's an error with the OpenAI API request, log and return a generic error message
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}
