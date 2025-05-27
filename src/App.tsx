import {createBrowserRouter, RouterProvider} from 'react-router'
import CarsPage from './pages/Cars'
import Root from './pages/Root'
import CarDetailsPage from './pages/CarDetailsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <CarsPage />,
      },
      {
        path: '/cars/:id',
        element: <CarDetailsPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
