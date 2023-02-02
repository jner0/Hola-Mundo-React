
export const getImagen = async() => {

    try {

        const apiKey = 'uboGd3IK06O41ogTRr4RUY2OfxDf5WUs';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;


    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontro la imagen'
    }
    
    
    
}

 getImagen();



