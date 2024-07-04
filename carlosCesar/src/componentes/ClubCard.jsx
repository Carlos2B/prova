import React from 'react';

function ClubCard({ club }) {
  return (
    <div className="club-card">
      <img src={club.escudos['60x60']} alt={club.nome} />
      <h2>{club.nome}</h2>
      <p>Abreviação: {club.abreviacao}</p>
    </div>
  );
}

export default ClubCard;