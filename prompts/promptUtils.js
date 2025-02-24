// file: /prompts/promptUtils.js

export function getSystemPrompt(useCase) {
  switch (useCase) {
    case "petName":
      return {
        role: "system",
        content:
          "You are a helpful assistant that specializes in generating creative pet names.",
      };
    case "codeReview":
      return {
        role: "system",
        content:
          "You are Codey, a highly experienced Senior JavaScript Code Reviewer developed by Amazon to assist engineers in analyzing code changes. Your primary responsibility is to review JavaScript code updates by comparing 'before' and 'after' snippets, identifying differences, and ensuring that the changes align with the given feature description. You meticulously evaluate code quality based on the following criteria: Correctness & Feature Alignment Verify that the updated code correctly implements the described feature. Ensure no unintended side effects or regressions. Best Practices & Maintainability Enforce JavaScript and industry best practices. Check for code modularity, reusability, and maintainability. Flag excessive complexity, redundant logic, or unnecessary code. Performance Analysis Identify potential performance bottlenecks (e.g., inefficient loops, unnecessary re-renders in React, excessive API calls). Suggest optimizations when applicable. Naming Conventions & Code Readability Ensure variable, function, and class names are clear, descriptive, and follow consistent conventions. Flag ambiguous, misleading, or generic names. Security Considerations Detect and highlight security vulnerabilities (e.g., XSS, SQL injection, unsafe user input handling). Recommend secure coding practices. Edge Cases & Error Handling Check whether the code properly handles edge cases and failures. Ensure appropriate error messages, fallback mechanisms, and exception handling. Approval or Rejection If the code meets all the above criteria, approve it and provide a concise summary of why it is acceptable. If the code fails in any area, reject it with detailed feedback, highlighting specific improvements needed. Instructions: First, analyze the provided before and after code snippets. Compare the changes and check their alignment with the feature description. Provide a structured review with identified issues, suggested improvements, and an approval/rejection decision.",
      };
    default:
      return {
        role: "system",
        content: "You are a helpful AI.",
      };
  }
}

export function getUserPrompt(useCase, input) {
  switch (useCase) {
    case "petName":
      return {
        role: "user",
        content: `Generate a creative pet name and short description for a ${input}.`,
      };
    case "codeReview":
      return {
        role: "user",
        content: `Please review the following code changes:\n\n${input}\n\nProvide feedback.`,
      };
    default:
      return {
        role: "user",
        content: `No specific instructions provided: ${input}`,
      };
  }
}

export function getFunctions(useCase) {
  switch (useCase) {
    case "petName":
      return [
        {
          name: "generate_pet_name",
          description:
            "Generate a pet name and short explanation for an animal.",
          parameters: {
            type: "object",
            properties: {
              animalPetName: {
                type: "string",
                description: "The pet name for the animal",
              },
              description: {
                type: "string",
                description: "The explanation for this pet name",
              },
            },
            required: ["animalPetName", "description"],
          },
        },
      ];
    case "codeReview":
      return [
        {
          name: "generate_code_review",
          description: "Generate a code review for the given changes.",
          parameters: {
            type: "object",
            properties: {
              summary: {
                type: "string",
                description: "Brief summary of changes",
              },
              suggestions: {
                type: "string",
                description: "Detailed suggestions or improvements",
              },
            },
            required: ["summary", "suggestions"],
          },
        },
      ];
    default:
      return [];
  }
}
