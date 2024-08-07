import React from 'react'
import { Link } from 'react-router-dom'

import CoinItem from './CoinItem';
import './Coins.css'
import Coin from "../routes/Coin";

const Coins = (props) => {
  return (
    <div className='container'>
      <div className='heading'>
        <p>#</p>
        <p>Coin</p>
        <p className='coin-name'>Price</p>
        <p>24h</p>
        <p className='hide-mobile'>Volume</p>
        <p className='hide-mobile'>Market cap</p>
      </div>

      {props.coins.map((coins) => (
        <Link
          to={`/coin/${coins.id}`}
          element={<Coin />}
          key={coins.id}
        >
          <CoinItem coins={coins} />
        </Link>
      ))}
    </div>
  )
}

export default Coins