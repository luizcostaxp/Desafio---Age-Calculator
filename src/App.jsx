import './App.css';
import CalcButton from './components/button';
import Form from './components/form';
import DisplayResult from './components/result';
import { useState } from 'react';

function App() {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const [years, setYears] = useState('--');
  const [months, setMonths] = useState('--');
  const [days, setDays] = useState('--');

  function handleDateChange() {
    const today = new Date();
    const birth = new Date(year, month - 1, day);

    let flag = true;
    const lastDayOfMonth = new Date(birth.getFullYear(), birth.getMonth() + 1, 0).getDate();

    if (year < 1 || year > today.getFullYear()) {
      flag = false;
    }
    if (month < 1 || month > 12) {
      flag = false;
    }
    if (day < 1 || day > lastDayOfMonth) {
      flag = false;
    }

    if (flag) {
      let y = today.getFullYear() - birth.getFullYear();
      let m = today.getMonth() - birth.getMonth();
      let d = today.getDate() - birth.getDate();

      if (d < 0) {
        m -= 1;
        d += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }

      if (m < 0) {
        y -= 1;
        m += 12;
      }

      setYears(y);
      setMonths(m);
      setDays(d);

      return;
    }

    setYears('--');
    setMonths('--');
    setDays('--');
  }

  return (
    <div className="App">
      <div className="input-area">
        <Form setYear={setYear} setMonth={setMonth} setDay={setDay} />
      </div>
      <div className="calculate-button">
        <CalcButton handleDateChange={handleDateChange} />
      </div>

      <div className="display-area">
        <DisplayResult years={years.toString()} months={months.toString()} days={days.toString()} />
      </div>
    </div>
  );
}

export default App;
