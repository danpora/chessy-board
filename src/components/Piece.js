import React from 'react';
import { isColorValid, isRoleValid } from '../utils';

export function Piece (props) {
  const { elements } = props

  if (!elements) return null;

  if (
    !isColorValid(elements.color) || !isRoleValid(elements.role)
  ) return null;

  return (
    <img 
      alt={elements.role}
      style={{ width: '100%' }}
      src={require(`../assets/images/pieces/${elements.color}_${elements.role}.png`)}
    />
  )
}