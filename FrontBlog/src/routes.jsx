import { HomePage } from "./pages/homePage";
import { Publications } from "./pages/publications";
import { AddPublicationPage } from "./pages/addPublication/addPublication";
import { InfoPublicationPage } from "./pages/infoPublication/InfoPublicationPage";

const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/publications', element: <Publications /> },
    { path: '/addPublication', element: <AddPublicationPage /> },
    { path: '/publicationContent/:id', element: <InfoPublicationPage /> }
];

export default routes;