import { AuthPage } from "./pages/auth";
import { HomePage } from "./pages/homePage";
const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/auth', element: <AuthPage /> }
];

export default routes;