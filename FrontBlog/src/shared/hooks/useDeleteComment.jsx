import { useState } from 'react';
import { deleteComment } from '../../services/api';

export const useDeleteComment = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteCommentById = async (id) => {
        try {
            setLoading(true);
            await deleteComment(id);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
            throw error;
        }
    };

    return { loading, error, deleteCommentById };
};