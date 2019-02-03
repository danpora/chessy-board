import React from 'react';

export function Piece (props) {
  const { elements } = props
  
  return (
    elements
      ? <img 
          alt={elements.role}
          style={{ width: '100%' }}
          src={require(`../assets/images/pieces/${elements.color}_${elements.role}.png`)}
        />
      : null
  )
}

export const getPieceState = (role, color) => ({
  role,
  color
});