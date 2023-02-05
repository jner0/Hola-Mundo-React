import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Prubas en CounterApp', () => { 

    const initialValue = 10;

    test('Debe hacer match con el snapshpt', () => { 

        const { container } =render( <CounterApp value={ initialValue }/> )

        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el valor inicial de 100 counterApp', () => { 

        render( <CounterApp value={ 100 } /> );
        expect( screen.getByText('100') ).toBeTruthy();
    });

    test('Debe de incrementar el boton +1', () => { 

        render( <CounterApp value={ initialValue }/> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11') ).toBeTruthy();

    });

    test('Debe de decrementar el boton -1', () => { 

        render( <CounterApp value={ initialValue }/> );
        fireEvent.click( screen.getByText('-1') );
        //screen.debug();
        expect( screen.getByText('9') ).toBeTruthy();

    });


    test('Debe de funcionar el boton de reset', () => { 

        render( <CounterApp value={ initialValue }/> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        //fireEvent.click( screen.getByText('Reset') );
        fireEvent.click (screen.getByRole( 'button', { name: 'btn-reset' } ));

        //expect( screen.getByText( initialValue ) ).toBeTruthy();

        //screen.debug();

        

    });


});