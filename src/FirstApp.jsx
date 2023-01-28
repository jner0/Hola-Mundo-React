//import { Fragment } from "react";
const getResult = (a,b) =>{
  return a + b;
};

export const FirstApp = () => {


  return (       
    //<Fragment>
    <>  
      <h1>{ getResult(1,11) }</h1>
      {/* <code> { JSON.stringify(newMessage) } </code> */}
      <p>Soy un subtitulo</p>
    </>  
    //</Fragment>

  );
}