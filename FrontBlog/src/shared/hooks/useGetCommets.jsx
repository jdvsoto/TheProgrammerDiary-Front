import { useState } from "react";
import { getCommentsByPublication } from '../../services/api';

export const useGetCommentsByPublication = (id) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCommentsByPublication = async () => {
        try {
            // const response = await getCommentsByPublication(id);
            const { data } = await getCommentsByPublication(id);
            console.log(data);
            setComments(data.comments);
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    };
    return { comments, loading, error, fetchCommentsByPublication };
};