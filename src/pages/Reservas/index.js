import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import { MdDelete } from 'react-icons/md';


export default function Reservas() {
  const reserveSelected = useSelector(state => state.reserve)

  return (
    <div>
      <h1 className='title-reservas'>Você solicitou {reserveSelected.length} reservas</h1>

      {reserveSelected.map(reserve => (

        <div className='reservas' key={reserve.id}>
          <img
            src={reserve.image}
            alt={reserve.title}
          />

          <strong>{reserve.title}</strong>
          <span>Quantidade: {reserve.amount}</span>

          <button
            type='button'
            onClick={() => { }}
          >
            <MdDelete size={25} color='#242424' />
          </button>
        </div>

      ))}

      <footer>
        <button type='button'>Solicitar Reservas</button>
      </footer>

    </div>
  );
}