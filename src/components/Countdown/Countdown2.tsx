import { useEffect, useState } from "react"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../lib/init-firebase'
// import styles from "./style.css";


export type CountDownProps = {
  data: Date,
  title: String
}

export default function Countdown2({data, title }: CountDownProps ) {

  console.log('data',data)
  console.log('title', title)
  // console.log('data props', data.data)
  // const [year, month, day] = data.split('/');
  // console.log(data.data)
  // const date = new Date(data.data);
  // console.log(date)
  // console.log(date.toDateString());


  // console.log(target2)
  const [dates, setDates] = useState([])
  // console.log(data)
  const [data2, setDate] = useState(data)

  useEffect(() => {
    getDates()
  }, [])

  useEffect(() => {
    // console.log('dates', dates)
  }, [dates])

  async function getDates() {
    const concursoColletonRef = collection(db, 'todos' )
    getDocs(concursoColletonRef)
        .then(response => {
            // console.log('response', response)
            const con = response.docs.map(doc => ({ 
                data: doc.data(), 
                id: doc.id,
            }))
            setDates(con)
        })
        .catch(error => console.log(error.message))
  }
 
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const target = new Date(data);
    // const target = new Date("12/31/2024 23:59:59");
    console.log('target', target)

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

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1> {title} </h1>
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
    </>
  );
};

