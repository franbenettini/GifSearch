import { fireEvent, getByRole, render, renderHook, screen, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SearchGif } from "../../src/components/SearchGif/SearchGif";


describe('Test en <SearchGif/>', () => {

    beforeEach(() => {
        render(<SearchGif></SearchGif>);
    })

    test('Estado inicial del componente', () => {
        
        const h1 = screen.queryByRole('heading', {level:1})

        expect(h1).not.toBeNull()
    }) 

    test('Cambio en el estado de Categorias', async () => {

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.change(input, {target: {value: 'Dragon Ball'}})
        fireEvent.submit(form)

        const h1 = screen.queryByRole('heading', {level:1})
        expect(h1).toBeTruthy()
    })


    test('Clear Search', () => {
        const button = screen.getByRole("button", {name: "Limpiear Busquedas"})
        expect(button).toBeInTheDocument()
    })

    test('Remove Category', () => {
        const category = "Dragon Ball";
        const categories = ["Goku", "Dragon Ball"];

        for (let i = 0; i < categories.length; i++) {
            if (category === categories[i]) {
              categories.splice(categories.indexOf(category), 1);
            }
          }
      
          expect(categories).toEqual(["Goku"]);
    })
    
})
