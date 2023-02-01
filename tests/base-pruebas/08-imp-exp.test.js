import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 

    test('GetHeroeById debe retornar un heroe por ID', () => { 

         const id = 1;
         const hero = getHeroeById( id );
         
         expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        
    });

    test('GetHeroeById debe retornar undefined si no existe el ID', () => { 

        const id = 100;
        const hero = getHeroeById( id );
        
        expect( hero ).toBeFalsy();
       
    });

    test('GetHeroesByOwner debe retornar solo los heroes de DC', () => { 

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);

        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

    });

    test('GetHeroesByOwner debe retornar solo los heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);

        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual( [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
        
    });

});