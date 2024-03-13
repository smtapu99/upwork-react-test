import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import CssBaseline from '@mui/material/CssBaseline';
import { store } from './store'
import App from './App.tsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <CssBaseline /> */}
      <App />
    </Provider>
  </React.StrictMode>,
)
