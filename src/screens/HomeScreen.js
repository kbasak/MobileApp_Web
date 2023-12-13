import React, { useState } from 'react';
import Fund from './Fund';
import FundDetails from './FundDetails';
import HomeFund from './HomeFund';
import HomeItem from './HomeItem';

const Home = () => {
  const [screen, setScreen] = useState(false);
  const [fund, setFund] = useState([]);
  //console.log(fund)
  return (
    <>
      {!screen ? <HomeFund setScreen={setScreen} setFund={setFund}/> : <Fund setScreen={setScreen} setFund={setFund} fund={fund}/>}
    </>
  );

}

export default Home;