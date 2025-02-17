import React, { useState } from "react";

function AIInterface() {
  const [file, setFile] = useState(null);
  const [query, setQuery] = useState("");

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleQuerySubmit = () => {
    console.log("User Query:", query);
    // This is where you call the Hugging Face API or AI backend
  };

  return (
    <div className="ai-container">
      <h2>Upload Meter Image</h2>
      <input type="file" onChange={handleFileUpload} />
      <button>Upload</button>

      <h2>Ask a Question</h2>
      <input
        type="text"
        placeholder="Type your query here..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleQuerySubmit}>Ask</button>
    </div>
  );
}

export default AIInterface;
