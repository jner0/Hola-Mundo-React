import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba en 06-deses-obj', () => { 

    test('Debe retornar un objeto', () => { 

        const clave = 'Lolazo';
        const edad = 27;
        const context = usContext( clave, edad);

        expect( context ).toEqual({
            nombreClave: clave,
            anios: edad,
        })

    });

});