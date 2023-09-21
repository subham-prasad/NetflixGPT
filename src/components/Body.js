import Login from './Login'
import Browser from './Browser'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './Header';


const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <Login />
    },
    {
        path:'/browser',
        element: <Browser />
    },
])


const Body = () => {
  return (
  <div>
    <Header />
    <RouterProvider router={appRouter} />
    
  </div>
    )
};



export default Body;
