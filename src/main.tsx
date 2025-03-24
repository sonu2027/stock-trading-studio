import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from "react-hot-toast";

// Redux-toolkit
import { store, persistor } from './store/store.js'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <App />
        <Toaster position="top-right" reverseOrder={false} />
      </StrictMode>
    </PersistGate>
  </Provider>
)
