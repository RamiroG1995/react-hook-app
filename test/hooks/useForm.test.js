import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en el useForm', () => {

    const initialForm = {
        name: 'Ramiro',
        email: 'ramiro@google.com'
    }

    test('debe de regresar los valores por defecto', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onImputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        });

    });

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Goku';

        const { result } = renderHook( () => useForm( initialForm ) );
        const { onImputChange } = result.current;

        act( () => {
            onImputChange( { target: { name: 'name', value: newValue }} );
        } );

        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );

    });

    test('debe de realizar el reset del formulario', () => {

        const newValue = 'Goku';

        const { result } = renderHook( () => useForm( initialForm ) );
        const { onImputChange, onResetForm } = result.current;

        act( () => {
            onImputChange( { target: { name: 'name', value: newValue }} );
            onResetForm();
        } );

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState ).toBe( initialForm );

    });

});