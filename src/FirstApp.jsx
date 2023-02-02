//import { Fragment } from "react";
import PropTypes from 'prop-types';

const getResult = (a,b) =>{
  return a + b;
};

export const FirstApp = ( {title, subTitle, name} ) => {
  
  return (       
    //<Fragment>
    <>  
      <h1>{ title }</h1>
      {/* <code> { JSON.stringify(newMessage) } </code> */}
      <p>{subTitle }</p>
      <p>{name}</p>
    </>  
    //</Fragment>

  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay nungun Titulo',
  subTitle: 'No Hay Subtitulo',
  name: 'Nemecio Rodriguez',
}