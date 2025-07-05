import { createBrowserRouter } from 'react-router-dom';
import MainRoutes from './mainroute';
import EcommerceRoutes from './Ecommers';


const router = createBrowserRouter([
  MainRoutes,
  ...EcommerceRoutes, // Spread because it's an array
]);


export default router;