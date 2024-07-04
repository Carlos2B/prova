import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClubCard from './ClubCard';

function ClubList() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    axios.get('https://api.cartola.globo.com/clubes')
      .then(response => {
        setClubs(Object.values(response.data));
      })
      .catch(error => {
        console.error("Erro", error);
      });
  }, []);

  return (
    <div className="club-list">
      {clubs.map(club => (
        <ClubCard key={club.id} club={club} />
      ))}
    </div>
  );
}

export default ClubList;