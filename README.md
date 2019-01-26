[![npm version](https://badge.fury.io/js/chessy-board.svg)](https://badge.fury.io/js/chessy-board)

# Chessy Board
A light react chess board. [Live example on codesandbox](https://codesandbox.io/s/oj33xyo1xy).

# Installation and Usage
The simplest way to use chessy-board is to install it from npm.

```
npm install --save chessy-board
```

Then use it in your app:

```js
import React from 'react';
import Board from 'chessy-board';

class App extends React.Component {
  state = {
    matrix: {
        '1': {
          a: { color: 'white', role: 'queen'},
          b: { color: 'white', role: 'king'},
          c: { color: 'white', role: 'bishop'},
          d: { color: 'white', role: 'king'},
          e: null,
          f: null,
          g: null,
          h: null,
        },
        '5': {
          c: { color: 'white', role: 'pawn'}
        }
      }
  }

  onSquareClick = ({row, col, elements}) => { }

  render() {
    const { selectedOption } = this.state;

    return (
        <Board
          isLoading={{ board: false, ownMove: false}}
          matrix={this.state.matrix}
          onClick={this.onSquareClick}
          orientation={0}
          highLightSelections={['c7']}
          highLightOptions={['c6', 'c5']}
        />
    );
  }
}
```

# Props
Props you may require/may need to specify:

* `className` - apply a class name to board
* `isLoading` - allows to show spinner over board
* `matrix` - position pieces on board
* `onClick` - callback with clicked square details
* `orientation` - white/black point of view
* `highLightSelections` - highlight selected pieces
* `highLightOptions` - highlight possible move options for selected piece

# License
ISC Licensed.
