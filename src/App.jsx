import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home';
import AboutPage from './pages/About';

const router = createBrowserRouter([
  { path: '/', element: <HomePage/> },
  { path: '/about', element: <AboutPage/> }
]);

function App() {

  return <RouterProvider router={router}/>;
}

export default App
