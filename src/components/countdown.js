import React, {useState, useEffect} from 'react';
import './countdown.css';


function Countdown() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}, 12, 31`) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: ""+Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: ""+Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: ""+Math.floor((difference / 1000 / 60) % 60),
        seconds: ""+Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }
  
  const [timeLeft, setTimeLeft]= useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <span>
         {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="containerCountdown">
      <p className="square">{timeLeft.days < 10? "0"+timeLeft.days: timeLeft.days}</p>
      <p className="square">{timeLeft.hours < 10? "0"+timeLeft.hours: timeLeft.hours}</p>
      <p className="square">{timeLeft.minutes < 10? "0"+timeLeft.minutes: timeLeft.minutes}</p>
      <p className="square">{timeLeft.seconds < 10? "0"+timeLeft.seconds: timeLeft.seconds}</p>
    </div>
  );
}
  
export default Countdown;
  