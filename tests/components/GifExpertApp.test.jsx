import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../../src/GifExpertApp";

describe('prueba en GifExpertApp', () => { 
    
    test('debe de hacer match con el snapshot', () => { 
        const { container } = render( <GifExpertApp /> );
        expect( container ).toMatchSnapshot();
     });

     test('debe de mostrar el componente <AddCategory />', () => { 
        render( <GifExpertApp /> );
        expect( screen.getByText('GifExpertApp') ).toBeTruthy();
      });

      test('debe de mostrar una lista de categorias', () => { 
        render( <GifExpertApp /> );
        expect( screen.getByText('Punisher') ).toBeTruthy();
      }); 

});