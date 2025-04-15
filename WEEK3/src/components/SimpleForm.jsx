import React, { useState } from 'react';

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted value:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <input
        type="text"
        className="border p-2 rounded w-full"
        placeholder="Enter something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default SimpleForm;
