import { useEffect, useState } from "react";
import "./Countdown2.css"; // Importe seu arquivo de estilo CSS

export type CountdownProps = {
  data: Date;
  title: string;
};

const Countdown2: React.FC<CountdownProps> = ({ data, title }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(data);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="countdown-card">
      <h2 className="countdown-title">{title}</h2>
      <div className="timer-wrapper">
        <div className="timer-inner">
          <div className="timer-segment">
            <span className="time">{days}</span>
            <span className="label">Days</span>
          </div>
          <span className="divider">:</span>
          <div className="timer-segment">
            <span className="time">{hours}</span>
            <span className="label">Hours</span>
          </div>
          <span className="divider">:</span>
          <div className="timer-segment">
            <span className="time">{minutes}</span>
            <span className="label">Minutes</span>
          </div>
          <span className="divider">:</span>
          <div className="timer-segment">
            <span className="time">{seconds}</span>
            <span className="label">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown2;
