import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Home() {
  const [name, setName] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('users')
      .insert([{ names: name }]);

    if (error) {
      console.error('Error inserting name:', error);
    } else {
      console.log('Name inserted successfully:', data);
      setName(''); // Clear the input field
      navigate(`/questions/${name}`); // Navigate to Questions with the name
    }
  };

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <motion.div 
        animate={{ y: 0, scale: 1 }} 
        initial={{ y: -1000, scale: 0 }} 
        transition={{ type: "spring" }} 
        className='flex flex-col justify-start items-center w-56 h-60 bg-fuchsia-300 rounded-md'
      >
        <h2 className="text-white text-center mt-12">Enter Your Name: </h2>
        <input 
          placeholder='Enter Name' 
          className="mt-2 w-5/6 rounded-md p-2" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button 
          className='mt-7 bg-purple-950 w-4/6 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </motion.div>
    </div>
  );
}

export default Home;