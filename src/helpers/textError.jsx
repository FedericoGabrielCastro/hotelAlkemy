/**
 * Envia el error de validacion en los formularios de Formik 
 */

import React from "react";

const TextError = props => {
    return <div className="h5 error text-danger mt-2" > { props.children } </div>
}

export default TextError