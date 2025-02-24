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
          "You are a senior developer who provides helpful code reviews.",
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
