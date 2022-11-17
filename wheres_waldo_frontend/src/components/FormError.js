import React, {useEffect} from 'react';

const FormError = (props) => {
  useEffect(()=> {
    document.getElementById(props.id).classList.add('error')

    return (()=> {
      document.getElementById(props.id).classList.remove('error')
    })
  }, [props.id])
  return (
    <p className="error">
      Please enter at least one character
    </p>
  )
}
export default FormError;