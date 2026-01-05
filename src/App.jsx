import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Kim from './routes/Kim'
import Lee from './routes/Lee'
import Lim from './routes/Lim'
import Park from './routes/Park'
import Wee from './routes/Wee'
import Yuk from './routes/Yuk'

const router = createBrowserRouter([
  ...Kim,
  ...Lee,
  ...Lim,
  ...Park,
  ...Wee,
  ...Yuk,
  {
    path: "/*",
    element: <div>잘못된 페이지입니다.</div>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
