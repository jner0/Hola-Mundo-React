import PropTypes from 'prop-types'

const handleAdd = () => {
   console.log('+1') 
} 

export const CounterApp = ( {value} ) => {

    return(
      <>
        <h1> Counter App </h1>
        <h2> { value } </h2>

        <button onClick={ handleAdd }>
          +1
        </button>
      </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

