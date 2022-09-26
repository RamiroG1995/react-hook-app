import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en el <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement
        });

        beforeEach( () => {
            jest.clearAllMocks();
        });

    test('debe de retornar los valores por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        expect( screen.getByText('Breaking Bad Quotes'))
        
        const nextButton = screen.getByRole('button',{ name: 'Next Quote'});
        expect( nextButton.disabled ).toBeFalsy;
        

    });

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Ramiro', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        expect( screen.getByText('Hola mundo') ).toBeTruthy();
        expect( screen.getByText('Ramiro') ).toBeTruthy();
        
        const nextButton = screen.getByRole('button',{ name: 'Next Quote'});
        expect( nextButton.disabled ).toBeFalsy;

    });

    test('debe de llamar la funcion increment', () => {


        useFetch.mockReturnValue({
            data: [{ author: 'Ramiro', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });

    
        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button',{ name: 'Next Quote'});
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    });


})