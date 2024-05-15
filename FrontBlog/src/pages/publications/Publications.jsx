import { Navbar } from "../../components/Navbar";
import { Link } from "react-router-dom";
import { Publication } from "../../components/Publication";
export const Publications = () => {
    return (
        <>
            <Navbar />
            <Publication />
            <Link to="/addPublication" className="AddPublicationBtn">Add Publication</Link>

        </>
    );
};