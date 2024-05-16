import { useState } from "react";
import { deletePublication } from "../../services/api";

export const useDeletePublication = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deletePublicationById = async (id) => {
        try {
            setLoading(true);
            await deletePublication(id);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
            throw error;
        }
    };

    return { loading, error, deletePublicationById };
};