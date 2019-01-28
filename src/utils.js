import { BOARD_INDEXES } from './constants';

export const getEmptyBoard = () => {
  const board = {};

  for (let row of BOARD_INDEXES.row) {
    board[row] = {};
  }

  for (let row of BOARD_INDEXES.row) {
    for (let col of BOARD_INDEXES.col) {
      board[row][col] = null;
    }
  }

  return board;
};

export const getInitializedBoard = () => ({
  '1': {
    a: { color: 'white', role: 'rook' },
    b: { color: 'white', role: 'knight' },
    c: { color: 'white', role: 'bishop' },
    d: { color: 'white', role: 'king' },
    e: { color: 'white', role: 'queen' },
    f: { color: 'white', role: 'bishop' },
    g: { color: 'white', role: 'knight' },
    h: { color: 'white', role: 'rook' },
  },
  '2': {
    a: { color: 'white', role: 'pawn' },
    b: { color: 'white', role: 'pawn' },
    c: { color: 'white', role: 'pawn' },
    d: { color: 'white', role: 'pawn' },
    e: { color: 'white', role: 'pawn' },
    f: { color: 'white', role: 'pawn' },
    g: { color: 'white', role: 'pawn' },
    h: { color: 'white', role: 'pawn' },
  },
  '3': {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
  },
  '4': {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
  },
  '5': {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
  },
  '6': {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
  },
  '7': {
    a: { color: 'black', role: 'pawn' },
    b: { color: 'black', role: 'pawn' },
    c: { color: 'black', role: 'pawn' },
    d: { color: 'black', role: 'pawn' },
    e: { color: 'black', role: 'pawn' },
    f: { color: 'black', role: 'pawn' },
    g: { color: 'black', role: 'pawn' },
    h: { color: 'black', role: 'pawn' },
  },
  '8': {
    a: { color: 'black', role: 'rook' },
    b: { color: 'black', role: 'knight' },
    c: { color: 'black', role: 'bishop' },
    d: { color: 'black', role: 'king' },
    e: { color: 'black', role: 'queen' },
    f: { color: 'black', role: 'bishop' },
    g: { color: 'black', role: 'knight' },
    h: { color: 'black', role: 'rook' },
  },
});
