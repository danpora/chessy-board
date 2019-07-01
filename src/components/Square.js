import React from 'react';
import cn from 'classnames';

import { Piece } from './Piece'
import styles from './Square.css'

export function Square (props) {
  const { elements } = props

  return (
    <SquareWrap {...props}>
      <Piece 
        elements={elements}
      />
    </SquareWrap>
  );
}

function SquareWrap (props) {
  const { onClick = () => {}, color, location, elements } = props;

  const selectedClass = props.highlight.isSelected && styles.selectedHighlight;
  const optionClass = props.highlight.isOption && styles.optionHighlight;

  return (
    <div 
      id={`${location.col}${location.row}`}
      className={cn(styles[color], selectedClass, optionClass)}
      onClick={onClick.bind(null, {
        row: location.row, 
        col: location.col, 
        elements: elements
      })}   
    >
      {props.children}
    </div>
  );
}
