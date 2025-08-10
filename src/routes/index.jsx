import { createBrowserRouter } from 'react-router-dom';
import EcommerceRoutes from './Ecommers';
import { AuthRoutes, MainRoutes } from './mainroute';



const router = createBrowserRouter([
  AuthRoutes,
  MainRoutes,
  ...EcommerceRoutes, // Spread because it's an array
]);


export default router;