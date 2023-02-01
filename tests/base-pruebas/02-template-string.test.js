import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {

    test('get Saludo debe retornar "Hola Nemecio"', () => {
        const name = 'Nemecio';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }`);
    });

});