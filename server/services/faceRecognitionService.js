export const analyzeFace = async ({ imageBuffer, fileName }) => {
  return {
    status: "processed",
    fileName,
    detectedFaces: 1,
    summary: "Face recognition pipeline placeholder. Integrate with your ML service.",
    metadata: {
      size: imageBuffer.length,
    },
  };
};
