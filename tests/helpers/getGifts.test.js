import { getGifts } from "../../src/helpers/getGifts";

describe('Pruebas en getGifts', () => {
    
    test('debe de retornar un arreglo de gifs', async() => {
        const gifs = await getGifts('One Punch');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });

    test('debe de retornar un arreglo vacio', async() => {
        const gifs = await getGifts('');
        expect(gifs.length).toBe(0);
    });

});