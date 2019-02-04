import React from 'react';

import { Square } from './components/Square';
import { getOrientedBoardIndexes, getSquareColor } from './utils';

import styles from './Board.css';

function Board (props) {
  
  const { className = '' } = props;

  return (
    <div className={`${className} ${styles.topContainer}`}>
      <div
        className={`
          ${styles.boardContainer} 
          ${styles[props.isLoading ? 'loading' : null]}
        `}
      >
        <div className={styles.gridContainer}>
          <BoardGrid 
            {...props}
          />
          {props.isLoading && (
            <div
              className={`${styles.spinner} ${styles['spinner-container']}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function BoardGrid (props) {
  const { matrix, orientation, onClick, 
          highLightSelections, highLightOptions } = props;

  const { orientedRowIndexes, orientedColIndexes } = getOrientedBoardIndexes(orientation);
  
  const squares = [];
  for (let row of orientedRowIndexes) {
    for (let col of orientedColIndexes) {

      const squareName = `${col}${row}`;
      const squareColor = getSquareColor(col, row);
      const squareElements = matrix && matrix[row] && matrix[row][col];

      const isSelected = highLightSelections.some((square) => {
        return square === squareName;
      });

      const isOption = highLightOptions.some((square) => {
        return square === squareName;
      });

      squares.push(
        <Square
          key={squareName}
          color={squareColor}
          elements={squareElements}
          location={{ row, col }}
          onClick={onClick}
          highlight={{ isSelected, isOption }}
        />
      );
    }
  }

  return squares;
}

export default Board;
export * from './utils';
