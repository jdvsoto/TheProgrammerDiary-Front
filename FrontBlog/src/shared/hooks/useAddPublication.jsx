import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { addPublication as addPublicationRequiest } from '../../services'
import toast from 'react-hot-toast';


export const useAddPublication = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const addPublication = async (title, subTitle, content, author, img) => {
        setLoading(true);

        const response = await addPublicationRequiest({
            title,
            subTitle,
            content,
            author,
            img
        });
        if (response.error) {
            toast.error('Error adding publication, probably one or more fields are empty or invalid');
        } else {
            toast.success('Publication added successfully');
            navigate('/publications');
        }
        setLoading(false);
    };

    return { addPublication, loading };
};