import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Form({ setYear, setMonth, setDay }) {
  const [errors, setErrors] = useState({
    day: '',
    month: '',
    year: ''
  });

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    const currentYear = new Date().getFullYear();
    let errorMsg = '';

    if (field === 'day') {
      if (value < 1 || value > 31) {
        errorMsg = 'Must be a valid day';
      }
      setDay(value);
    } else if (field === 'month') {
      if (value < 1 || value > 12) {
        errorMsg = 'Must be a valid month';
      }
      setMonth(value);
    } else if (field === 'year') {
      if (value > currentYear) {
        errorMsg = 'Must be in the past';
      }
      setYear(value);
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: errorMsg }));
  };

  return (
    <>
      <form>
        <div className="form-control">
          <label htmlFor="day" className={errors.day ? 'error-label' : ''}>Day</label>
          <input
            type="number"
            id="day"
            placeholder="DD"
            onChange={handleChange('day')}
            className={errors.day ? 'input-error' : ''}
          />
          {errors.day && <p className="error-message">{errors.day}</p>}
        </div>

        <div className="form-control">
          <label htmlFor="month" className={errors.month ? 'error-label' : ''}>Month</label>
          <input
            type="number"
            id="month"
            placeholder="MM"
            onChange={handleChange('month')}
            className={errors.month ? 'input-error' : ''}
          />
          {errors.month && <p className="error-message">{errors.month}</p>}
        </div>

        <div className="form-control">
          <label htmlFor="year" className={errors.year ? 'error-label' : ''}>Year</label>
          <input
            type="number"
            id="year"
            placeholder="YYYY"
            onChange={handleChange('year')}
            className={errors.year ? 'input-error' : ''}
          />
          {errors.year && <p className="error-message">{errors.year}</p>}
        </div>
      </form>
    </>
  );
}

Form.propTypes = {
  setYear: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
  setDay: PropTypes.func.isRequired
};
