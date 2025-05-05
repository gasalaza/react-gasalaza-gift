import { render } from "@testing-library/react";
import { GiftItem } from "../../src/components/GiftItem";

describe('Pruebas en GiftItem', () => {
  
    const titulo = 'Un título';
    const url = 'https://localhost/algo.jpg';

    test('debe de hacer match con el snapshot', () => {
        
        
        const {container } = render(<GiftItem title={titulo} url={url}/>);

        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        
        const {src, alt} = render(<GiftItem title={titulo} url={url}/>).getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(titulo);

    });

    test('debe de mostrar el título en el componente', () => {
        
        const {getByText} = render(<GiftItem title={titulo} url={url}/>);

        expect(getByText(titulo)).toBeTruthy();

    });

});
