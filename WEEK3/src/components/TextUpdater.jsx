import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        className="border p-2 w-full rounded"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-4 text-lg font-semibold">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;
