import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
const router = createBrowserRouter([
  {
    path:'/',
    element: <div>Page d'accueil</div>
  },
  {
    path: 'blog',
    element: <div>Blog</div>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
