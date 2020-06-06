import React from 'react'

/**
 * React.FC: É um tipo do TypeScript que pode recer um parâmetro
 * interface no TypeScrip determina o tipo de parêmetro que posso receber
 */

interface HeaderProps {
  title: string;
}
 
const Header: React.FC<HeaderProps> = (props) => {
  return(
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;