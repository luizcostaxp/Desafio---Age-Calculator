import PropTypes from 'prop-types';

export default function DisplayResult({years, months, days}) {
  return (
    <div className='result'>
        <span className='display-years'>
          <span className='result-display'>
          {years} 
          </span>
          years</span>

        <span className='display-months'>
        <span className='result-display'>
          {months} 
          </span>
          <span className='result-name'>
          months
          </span>
          </span>

        <span className='display-days'>
        <span className='result-display'>
          {days} 
          </span>
          days</span>
    </div>
  )
}


DisplayResult.propTypes = {
  years: PropTypes.string.isRequired,
  months: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired
};
