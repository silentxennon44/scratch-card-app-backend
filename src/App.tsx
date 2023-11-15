import React from 'react';
import './App.css';

import Entry from '@/pages/entry';
import { RouterProvider } from 'react-router-dom';
import Routes from './router';

function App() {
  return (
    <div>
      <RouterProvider router={Routes}/>
    </div>
  );
}

export default App;
