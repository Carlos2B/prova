import React from 'react';

function Header({ name, className }) {
  return (
    <header>
      <h1>Informações dos Clubes de Futebol</h1>
      <p>{name} - {className}</p>
    </header>
  );
}

export default Header;