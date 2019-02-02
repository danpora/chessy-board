import React from 'react';
import { BOARD_INDEXES, SQUARE_COLOR, NORMAL_BOARD_PARAMS } from './constants';
import { Square } from './square';
import styles from './board.css';

function Board(props) {
  const {
    className = '',
    matrix,
    orientation,
    onClick = () => {},
    highLightSelections,
    highLightOptions,
  } = props;

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
            matrix={matrix}
            orientation={orientation}
            onClick={onClick}
            highLightOptions={highLightOptions}
            highLightSelections={highLightSelections}
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
  const { matrix, orientation, onClick, highLightSelections, highLightOptions } = props;

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

const getOrientedBoardIndexes = (orientation) => ({
  orientedRowIndexes: orientation
    ? [...BOARD_INDEXES.row]
    : [...BOARD_INDEXES.row].reverse(),
  orientedColIndexes: orientation
    ? [...BOARD_INDEXES.col].reverse()
    : [...BOARD_INDEXES.col],
});

// Map ASCII 'a' to 1, 'b' to 2 and so on
const getNormalizedSquareLocation = (col, row) => ({
  normalizedCol: col.charCodeAt() - NORMAL_BOARD_PARAMS.col,
  normalizedRow: row.charCodeAt() - NORMAL_BOARD_PARAMS.row,
});

const getSquareColor = (col, row) => {
  const { normalizedRow, normalizedCol } = getNormalizedSquareLocation(
    col,
    row,
  );  
  const squareIndexModulus = 1 - ((normalizedCol + normalizedRow) % 2);

  return SQUARE_COLOR[squareIndexModulus];
};

export default Board;
export * from './utils';
export * from './piece';
