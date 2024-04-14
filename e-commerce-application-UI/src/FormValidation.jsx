import React, { useState } from 'react';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [validInputs, setValidInputs] = useState({
    username: false,
    email: false,
    password: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate input
    switch (name) {
      case 'username':
        // Validation logic for username
        setValidInputs({
          ...validInputs,
          [name]: value.length >= 3 // Example validation condition
        });
        break;
      case 'email':
        // Validation logic for email
        // You can use regex or other validation methods here
        setValidInputs({
          ...validInputs,
          [name]: /\S+@\S+\.\S+/.test(value)
        });
        break;
      case 'password':
        // Validation logic for password
        setValidInputs({
          ...validInputs,
          [name]: value.length >= 6 // Example validation condition
        });
        break;
      default:
        break;
    }
  };

  console.log(validInputs)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // console.log(validInputs)
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className={`appearance-none border ${validInputs.username ? 'border-green-500' : 'border-red-500'} 
            rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="username"
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className={`appearance-none border ${validInputs.email ? 'border-green-500' : 'border-red-500'} 
            rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className={`appearance-none border ${validInputs.password ? 'border-green-500' : 'border-red-500'} 
            rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${Object.values(validInputs).every(val => val) ? '' : 'opacity-50 cursor-not-allowed'}`}
          type="submit"
          disabled={!Object.values(validInputs).every(val => val)}
        >
          
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormValidation;
