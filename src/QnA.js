
import React, { useState } from 'react';

function QnA() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnswer("This is a placeholder answer.");
  };

  return (
    <div>
      <h2>Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Type your question" 
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {answer && <p>Answer: {answer}</p>}
    </div>
  );
}

export default QnA;
