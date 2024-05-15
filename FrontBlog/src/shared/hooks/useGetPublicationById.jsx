import { useState } from 'react';
import { getPublication } from '../../services/api';

export const useGetPublicationById = (id) => {
    const [publications, setPublication] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPublicationById = async () => {
        try {
            const { data } = await getPublication(id);
            console.log(data);
            setPublication(data.publications);
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    };

    return { publications, loading, error, fetchPublicationById };
};