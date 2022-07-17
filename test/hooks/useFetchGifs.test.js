import { useFetchGif } from "../../src/hooks/useFetchGif";
import { renderHook, waitFor } from "@testing-library/react";


describe('Test en hook useFetchGifs', () => {

    test('should first', () => {

    const {result} = renderHook (() => useFetchGif('One Punch'))

    const { imagenes, loading } = result.current;

    expect( imagenes.length).toBe(0);
    expect( loading ).toBeTruthy();

    });

    test('Debe retornar un arreglo de imagenes y el loading en false', async () => {

        const {result} = renderHook (() => useFetchGif('One Punch'));

        await waitFor (
            ()=> expect (result.current.imagenes.length).toBeGreaterThan(0)
        )

        const { imagenes, loading } = result.current;

        expect(imagenes.length).toBeGreaterThan(0);
        expect(loading).toBeFalsy();

        
    })
});