import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter', () => {

    test('debe de retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );

    });

    test('counter debe de retornar 100 si le mando 100', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect( counter ).toBe(100);
        
    });

    test('debe de incrementar el contador', () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, increment } = result.current;

        act( () => {
            increment();
            increment(2);
        } );
        
        expect( result.current.counter ).toBe(13);
        
    });

    test('debe de decrementar el contador', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement } = result.current;

        act( () => {
            decrement();
            decrement(2);
        } );
        
        expect( result.current.counter ).toBe(97);
        
    });

    test('debe de hacer el reset del contador', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment, reset } = result.current;

        act( () => {
            increment(10);
            reset();
        } );
        
        expect( result.current.counter ).toBe(100);
        
    });


})