import { useState } from 'react';
import { addComment as addCommentRequest } from '../../services/api';
import toast from 'react-hot-toast';

export const useAddComment = () => {
    const [loading, setLoading] = useState(false);

    const addComment = async (author, email, content, publication) => {
        setLoading(true);

        const response = await addCommentRequest({
            author,
            email,
            content,
            publication
        });

        if (response.error) {
            toast.error('Error adding comment, probably one or more fields are empty or invalid');
        } else {
            toast.success('Comment added successfully');
        }
        
        setLoading(false);
    };

    return { addComment, loading };
};


