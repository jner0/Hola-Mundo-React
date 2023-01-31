
test('Esta prueba no debe de fallar', () => {
    if (1 === 2){
        throw new Error('No puede dividir entre 0');
    }
});