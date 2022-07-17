import { render,screen } from "react-dom"
import { GifGrid } from "../../src/components/GiftGrid/GifGrid"
import { useFetchGif } from "../../src/hooks/useFetchGif";

jest.mock('../../src/hooks/useFetchGif.js');

describe ('Test en <GifGrid/>', () => {

    const category = 'One Punch';

    test('Debe mostrar inicialmente el loading', () => {

        useFetchGif.mockReturnValue({
            imagenes:[],
            loading: true
        })

        render( <GifGrid category={category}/> )

        expect ( screen.getByText('Cargando...').innerHTML ).toBe('Cargando...');
        expect ( screen.getByText(category).innerHTML ).toBe(category);

    });

    test('Debe mostrar items, cuando se cargan las imagenes en useFectGids', () => {

        useFetchGif.mockReturnValue({
            imagenes:[
                {id:'ABC123', title:'Saitama', url:'https://onepunch/saitama.jpg'},
                {id:'ABC333', title:'Garou', url:'https://onepunch/garou.jpg'},
            ],
            loading:false
        })

        render( <GifGrid category={category}/> )
        
        expect(screen.getAllByRole('img').length).toBe(2)

    });
})
