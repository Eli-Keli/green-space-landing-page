import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

//layout
import { MainLayout } from "./layouts/MainLayout";

//Pages
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import VolunteerPage from './pages/VolunteerPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='/events' element={<EventsPage />}/>
      <Route path='/volunteer' element={<VolunteerPage />}/>
      <Route path='/signup' element={<SignupPage />}/>
      <Route path='/login' element={<LoginPage />}/>
    </Route>
  )
)


const App = () => {
  return <RouterProvider router={router} />
}


export default App;
