import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'ramiro',
        email: 'ramiro23@google.com'
    });

    const { username, email } = formState;

    const onImputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect( () => {
      //console.log('formState changed');
    }, [ formState ] );

    useEffect( () => {
        //console.log('email changed');
      }, [ email ] );
    

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr/>

        <input
            type = "text"
            className = "form-control"
            placeholder = "Username"
            name = "username"
            value = { username }
            onChange = { onImputChange }
        />

        <input
            type = "email"
            className = "form-control mt-2"
            placeholder = "ramirogalindo@google.com"
            name = "email"
            value = { email }
            onChange = { onImputChange }
        />

        {
            (username === "ramiro2") && <Message />
        }
    
    </>
  )
}
