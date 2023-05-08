import React from 'react';
import { Link } from 'react-router-dom';
import './Board.css';

function Board() {
  return (
    <div className='board'>
      <Link to='/dashboard'>Board</Link>
    </div>
  )
}

export default Board;
