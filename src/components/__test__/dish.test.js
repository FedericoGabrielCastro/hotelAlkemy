import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Dish from "../dish";

describe('componet Dish', () => {

    it('should render', () => {
        const component = render(<Dish />)
    
        component.container.querySelector(
            'container mt-3 col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6'
        )
    });
});