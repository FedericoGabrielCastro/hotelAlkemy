import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import TextError from "../textError"

describe('helper TextError', () => {
    
    it('should render', () => {
        const component = render(<TextError/>)
        
        component.container.querySelector(
            'h5 error text-danger mt-2'
        )
    });

});