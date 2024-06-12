import { useState, useEffect, useCallback } from "react";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadLine = "March, 31, 2023";

  const getTime = useCallback((deadLine: string) => {
    const time = Date.parse(deadLine) - Date.now();
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => getTime(deadLine), 1000);

    return () => clearInterval(interval);
  }, [getTime]);

  return (
    <div className="w-[60px] lg:w-[100px]">
      {hours}:{minutes}:{seconds}
    </div>
  );
};

export default Timer;
