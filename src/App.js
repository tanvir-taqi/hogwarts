
import { createContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import History from './components/History/History';
import Home from './components/Home/Home';
import Students from './components/Students/Students';
import Teacher from './components/Teachers/Teacher';
import Main from './layouts/Main';


export const FakeDataContext = createContext()

function App() {
  const [fakeData, setFakeData] = useState([])

  useEffect(()=>{
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setFakeData(data))
  },[])


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
        {
          path:'/teachers',
          element:<Teacher></Teacher>
        },
        {
          path:'/students',
          element:<Students></Students>
        },
      
      ]
    },
    {
      path:'*',
      element:<ErrorPage></ErrorPage>
    }
  ])

  return (
    <div className="App">
      <FakeDataContext.Provider value={fakeData}>
      <RouterProvider router={router}>
      
      </RouterProvider>
      </FakeDataContext.Provider>
     
    </div>
  );
}

export default App;
