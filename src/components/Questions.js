import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function Questions() {
  const { name } = useParams(); // Get the name from URL params
  const [answers, setAnswers] = useState({ message: '' }); // Store answers in state
  const navigate = useNavigate();

  // Handle input change
  const handleInputChange = (e) => {
    setAnswers({ ...answers, message: e.target.value });
  };

  // Submit answers to Supabase
  const handleAnswerSubmit = async () => {
    const { data, error } = await supabase
      .from('users')
      .update({ message: answers.message }) // Update specific column
      .eq('names', name); // Match row by name

    if (error) {
      console.error('Error updating answers:', error);
    } else {
      console.log('Answers updated successfully:', data);
      navigate(`/flower/${name}`);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Hey {name},</h1>
      <div>
        <h2 className="text-lg font-semibold">Message for me pls:</h2>
        <label className="block mt-2">
          <input
            type="text"
            value={answers.message}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here..."
          />
        </label>
      </div>
      <button
        onClick={handleAnswerSubmit}
        className="mt-4 bg-purple-950  text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Submit Answers
      </button>
    </div>
  );
}

export default Questions;
