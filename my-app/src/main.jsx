import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import store from './store/index.js'
import router from './router/index.js'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </Provider>

  // </StrictMode>,
)
