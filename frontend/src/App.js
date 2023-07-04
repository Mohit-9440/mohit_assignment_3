import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Profile';
import './App.css';

export default function App(){ 

  const [cardsData, setCardsData] = useState([])

  const getData = () => {
    axios.get('https://mohit-assignment-3-api.vercel.app/api/users/getalluser')
      .then((response) => {
        setCardsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
  <div className='cards'>
    <div className='cards_wrapper'>
      <Cards cardsData={cardsData} setcardsData={setCardsData} />
    </div>
  </div>
  )};
