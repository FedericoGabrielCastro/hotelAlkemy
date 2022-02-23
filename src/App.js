import React from 'react'
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import CustomRoutes from './routes/customRoutes'
import { store } from './redux/store';

const App = () => {
    
    return (
        <Provider store={store}>
            <BrowserRouter>
                <CustomRoutes />
            </BrowserRouter>
        </Provider>
    )
}

export default App