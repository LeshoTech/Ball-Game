import './App.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Nav from './Nav';

function App() {

  const[redBall, setRedBall] = useState(10);
  const[blueBall, setBlueBall] = useState(10);
  const[yellowBall, setYellowBall] = useState(10);
  const[clicksleft, setClicksLeft] = useState(15);

  let RednumList = [];
  let BluenumList = [];
  let YellownumList = [];

  const blueBallgoal = <div style={{ color: 'blue'}}>You got all the blue balls!</div>
  const yellowBallgoal = <div style={{ color: 'yellow'}}>You got all the yellow balls!</div>
  const redBallgoal = <div style={{ color: 'red'}}>You got all the red balls!</div>

 
  const RedRanNum = () => {
    for ( let i = 0; i < 40; i++){

      let ran = Math.floor(Math.random() * 1000) + -0;
     RednumList.push(ran);
    }

    console.log(RednumList)
  }

  const BlueRanNum = () => {
    for ( let i = 0; i < 40; i++){

      let ran = Math.floor(Math.random() * 900) + -35;
     BluenumList.push(ran);
    }

    console.log(BluenumList)
  }

  const YellowRanNum = () => {
    for ( let i = 0; i < 40; i++){

      let ran = Math.floor(Math.random() * 650) + -850;
     YellownumList.push(ran);
    }

    console.log(YellownumList)
  }

  RedRanNum()
  BlueRanNum()
  YellowRanNum()

  

  const Red = 
  <motion.div 
  className="Red"
  animate={{ 
    x: 
    [RednumList[0], 
    RednumList[1], 
    RednumList[2], 
    RednumList[3], 
    RednumList[4], 
    RednumList[5], 
    RednumList[6], 
    RednumList[7], 
    RednumList[8], 
    RednumList[9], 
    RednumList[10], 
    RednumList[11], 
    RednumList[12], 
    RednumList[13], 
    RednumList[14], 
    RednumList[15], 
    RednumList[16], 
    RednumList[17], 
    RednumList[18], 
    RednumList[19], 
  ], 
    y: [RednumList[22], 
    RednumList[25], 
    RednumList[28], 
    RednumList[23], 
    RednumList[24], 
    RednumList[26], 
    RednumList[35], 
    RednumList[27], 
    RednumList[28], 
    RednumList[29], 
    RednumList[31], 
    RednumList[32], 
    RednumList[38], 
    RednumList[33], 
    RednumList[34], 
    RednumList[35], 
    RednumList[36], 
    RednumList[37], 
    RednumList[38], 
    RednumList[39],
    ] }}
  transition={{ x: { repeat: Infinity, duration: 40}, y: { repeat: Infinity, duration: 40 } }}
  onTap={() => {setRedBall((prev) => prev - 1)}}
  > 

  </motion.div>;

  const Blue = 
  <motion.div 
  className="Blue"
  animate={{  
    x: [BluenumList[0], 
    BluenumList[1], 
    BluenumList[8], 
    BluenumList[3], 
    BluenumList[4], 
    BluenumList[5], 
    BluenumList[5], 
    BluenumList[7], 
    BluenumList[8], 
    BluenumList[9], 
    BluenumList[10], 
    BluenumList[11], 
    BluenumList[18], 
    BluenumList[13], 
    BluenumList[14], 
    BluenumList[15], 
    BluenumList[16], 
    BluenumList[17], 
    BluenumList[18], 
    BluenumList[19], 
    ], 
    y: [BluenumList[20], 
    BluenumList[21], 
    BluenumList[22], 
    BluenumList[23], 
    BluenumList[24], 
    BluenumList[25], 
    BluenumList[26], 
    BluenumList[27], 
    BluenumList[28], 
    BluenumList[29], 
    BluenumList[30], 
    BluenumList[31], 
    BluenumList[32], 
    BluenumList[33], 
    BluenumList[34], 
    BluenumList[35], 
    BluenumList[36], 
    BluenumList[37], 
    BluenumList[38], 
    BluenumList[39], 
    ] }}
  transition={{ x: { repeat: Infinity, duration: 40}, y: { repeat: Infinity, duration: 40, ease: 'easeIn' } }}
  onTap={() => {setBlueBall((prev) => prev - 1)}}
  > 

  </motion.div>;

  const Yellow =
  <motion.div 
  className="Yellow"
  animate={{  
    x: [YellownumList[0], 
    YellownumList[1], 
    YellownumList[8], 
    YellownumList[3], 
    YellownumList[4], 
    YellownumList[5], 
    YellownumList[5], 
    YellownumList[7], 
    YellownumList[8], 
    YellownumList[9], 
    YellownumList[10], 
    YellownumList[11], 
    YellownumList[18], 
    YellownumList[13], 
    YellownumList[14], 
    YellownumList[15], 
    YellownumList[16], 
    YellownumList[17], 
    YellownumList[18], 
    YellownumList[19], 
    ], 
    y: [YellownumList[0], 
    YellownumList[1], 
    YellownumList[8], 
    YellownumList[3], 
    YellownumList[4], 
    YellownumList[5], 
    YellownumList[5], 
    YellownumList[7], 
    YellownumList[8], 
    YellownumList[9], 
    YellownumList[10], 
    YellownumList[11], 
    YellownumList[18], 
    YellownumList[13], 
    YellownumList[14], 
    YellownumList[15], 
    YellownumList[16], 
    YellownumList[17], 
    YellownumList[18], 
    YellownumList[19],  
    ] }}
  transition={{ x: { repeat: Infinity, duration: 40}, y: { repeat: Infinity, duration: 40, ease: 'easeIn' } }}
  onTap={() => {setYellowBall((prev) => prev - 1)}}
  > 

  </motion.div>;


  return (
    <div>
      <Nav blueBall={blueBall} redBall={redBall} yellowBall={yellowBall} />
      <div className="App">
        { blueBall === 0 ? blueBallgoal : Blue }
        {redBall === 0? redBallgoal : Red }
        { yellowBall === 0 ? yellowBallgoal : Yellow }
        
      </div>
  
    </div>
  );
}

export default App;
