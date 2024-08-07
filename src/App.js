import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Coins from "./components/Coins";
import NavBar from "./components/NavBar";
import Coin from "./routes/Coin";



function App() {
  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`'

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data)
    })
    .catch((err) => console.warn(err))
  }, [])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
