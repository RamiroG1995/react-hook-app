import { memo } from 'react'

export const Small = memo(( {value} ) => {

    console.log('me volci a generar :(');

  return (
    <small>{ value }</small>
  )
})
