import React, { useState } from "react";

function AIInterface() {
  const [file, setFile] = useState(null);
  const [query, setQuery] = useState("");

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
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
      <button>Ask</button>
    </div>
  );
}

export default AIInterface;
