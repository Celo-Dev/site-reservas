import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GiCommercialAirplane } from 'react-icons/gi';
import './style.css'

import api from '../../services/api';

export default function Home() {

  const dispatch = useDispatch()
  const [trips, setTrips] = useState([]);

  useEffect(() => {

    async function loadApi() {
      const response = await api.get('trips');
      setTrips(response.data);
    }

    loadApi();

  }, [])


  function handleAdd(trip) {
    dispatch({
      type: 'ADD_RESERVE',
      trip
    });
  }


  return (
    <div>
      <div className='box-home'>

        {trips.map(trip => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>

            <button
              type='button'
              onClick={() => handleAdd(trip)}
            >
              <div>
                <GiCommercialAirplane size={18} color='#FFF' />
              </div>
              <span>SOLICITAR RESERVA</span>
            </button>

          </li>

        ))}

      </div>
    </div>
  );
}