import React from 'react';
import './App.css';
import Home from './pages/Home';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider } from '@elastic/eui';

function App() {
  return (
    <div className="App">
        <EuiProvider colorMode="light">
            <Home/>
        </EuiProvider>
    </div>
  );
}

export default App;
