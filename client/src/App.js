import './App.css';
import User from './components/GetUser/index.jsx';
import AddUser from './components/AddUser/index.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const route = createBrowserRouter([
    {  
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
  ])
  return (
    <div className="App">
      <RouterProvider router = {route}></RouterProvider>
    </div>
  );
}

export default App;
