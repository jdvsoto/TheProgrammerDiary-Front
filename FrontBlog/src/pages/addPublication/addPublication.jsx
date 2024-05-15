import { useState } from "react";
import { AddPublication } from "../../components/AddPublication";
import { Navbar } from '../../components/Navbar';
import backIcon from '../../assets/img/backIcon.png'
import './addPublication.css';

export const AddPublicationPage = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>

            <article>
                <div className="navContainer">
                    <Navbar className="divAddPublication" />
                </div>
                <AddPublication
                    loading={loading}
                    setLoading={setLoading}
                />
            </article>
        </>

    );
};