
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import History from './components/History/History';
import Home from './components/Home/Home';
import Main from './layouts/Main';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/history',
          element:<History></History>
        },
      
      ]
    }
  ])

  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
