const cannedResponses = [
  "I can help you with account setup, scheduling, or support tickets.",
  "Let me check that for you — can you share a few more details?",
  "Thanks! I can summarize this for our support team.",
  "I am here to guide you through the face recognition workflow.",
];

export const getChatbotReply = async ({ message, sessionId }) => {
  const trimmedMessage = message.trim().toLowerCase();
  const matchingResponse = cannedResponses.find((response) =>
    response.toLowerCase().includes(trimmedMessage.split(" ")[0])
  );

  return (
    matchingResponse ||
    `You said: "${message}". I will route this to a human agent if needed.`
  );
};
