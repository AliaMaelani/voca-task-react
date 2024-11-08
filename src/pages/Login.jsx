import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/20/solid';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });

    // Simpan nama pengguna di localStorage
    localStorage.setItem('userName', name);

    // Alihkan ke halaman Task setelah login
    navigate('/tasks');
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-col items-center w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-green-500 mb-2">Voca</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Task</h2>

        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Alia Maelani"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-400">Email</label>
            <input
              id="email"
              type="email"
              placeholder="aliamaelani@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-400">Password</label>
            <input
              id="password"
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200 flex items-center justify-center"
          >
            <CheckIcon className="h-5 w-5 text-white mr-2" />
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
