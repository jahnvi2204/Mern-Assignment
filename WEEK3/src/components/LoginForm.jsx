import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
      <input
        type="email"
        className="border p-2 mb-4 w-full rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="border p-2 mb-4 w-full rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
