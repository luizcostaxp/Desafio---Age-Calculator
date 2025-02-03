import PropTypes from 'prop-types' 

export default function CalcButton({ handleDateChange }) {
  return (
    <>
        <div>
            <hr></hr>
            <button onClick={handleDateChange}>
                <img src="src/assets/images/icon-arrow.svg" alt="SVG Image" />
            </button>
        </div>
    </>
  )
}

CalcButton.propTypes = {
  handleDateChange: PropTypes.func.isRequired
}
