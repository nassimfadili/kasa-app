import React from 'react';
import { RouterProvider } from 'react-router-dom';
import '../src/style/App.scss';
import router from './components/router';



function App() {
  return <RouterProvider router={router}/>
}

export default App;
