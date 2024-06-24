import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/404';
import Apropos from '../pages/a-propos';
import Acceuil from '../pages/accueil';
import Logement from '../pages/logement';


const router = createBrowserRouter([
    {
        path:'/',
        element: <Acceuil/>
    },
    {
        path: 'logement',
        element: <Logement/>
    },
    {
        path:'*',
        element: <NotFound/>
    
    },
    {
        path:'a-propos',
        element: <Apropos/>
    }
  ]);
  
  export default router;