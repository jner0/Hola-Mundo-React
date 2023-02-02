import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => { 

    test('Debe de hacer match con el snapshot', () => { 
        
        const title =  'Hola soy Goku';
        const { container } = render( <FirstApp title = { title } />)

        expect( container ).toMatchSnapshot();

    });

    test('debe mostrar el titulo en un H1', () => { 

        const title =  'Hola soy Goku';
        const { container, getByText } = render( <FirstApp title = { title } />)

        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toBe( title );

    });

    test('Debe demostrar el subtitulo enviado por props', () => { 

        const title =  'Hola soy Goku';
        const subTitle =  'Soy un subtitulo';
        const { getAllByText } = render( 
            <FirstApp 
                title = { title } 
                subTitle= { subTitle }
            />
        );

        expect( getAllByText(subTitle).length ).toBe(1);

    });

});