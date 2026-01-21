import React, { useState } from "react";

const FaceRecognition = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setResult(null);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("/api/face-recognition/analyze", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: "Unable to reach the face recognition service." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="card">
      <div className="card__header">
        <h2>Face Recognition</h2>
        <p>Upload an image to analyze face detection output.</p>
      </div>
      <form className="face" onSubmit={onSubmit}>
        <label className="face__upload">
          <input type="file" accept="image/*" onChange={onFileChange} />
          <span>{selectedFile ? selectedFile.name : "Choose an image"}</span>
        </label>
        <button type="submit" disabled={isLoading || !selectedFile}>
          {isLoading ? "Analyzing..." : "Analyze"}
        </button>
      </form>
      <div className="face__results">
        {result && result.error && <p className="error">{result.error}</p>}
        {result && !result.error && (
          <div>
            <p>
              Status: <strong>{result.status}</strong>
            </p>
            <p>
              Faces detected: <strong>{result.detectedFaces}</strong>
            </p>
            <p>{result.summary}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FaceRecognition;
