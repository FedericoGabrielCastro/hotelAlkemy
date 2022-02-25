import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Loading from '../loading'

describe('comoponent Loading', () => {
    
    it('should render', () => {
        const componet = render(<Loading/>)
        
        componet.container.querySelector('float-right p-5')
    });
});