import { useState } from 'react';
import { addComment as addCommentRequest } from '../../services/api';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useAddComment = () => {
    const [loading, setLoading] = useState(false);
    const navigate = Navigate;
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
        return response.comment; // Devuelve el comentario agregado



    };

    return { addComment, loading };
};

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { addComment as addCommentRequest } from '../../services/api';
// import toast from 'react-hot-toast';

// export const useAddComment = () => {
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const addComment = async (author, email, content, publication) => {
//         setLoading(true);

//         try {
//             const response = await addCommentRequest({
//                 author,
//                 email,
//                 content,
//                 publication
//             });

//             if (response.error) {
//                 toast.error('Error adding comment, probably one or more fields are empty or invalid');
//             } else {
//                 toast.success('Comment added successfully');
//                 // return response.comment; // Devuelve el comentario agregado
//                 navigate(`/publicationContent/${publication}`);
//             }
//         } catch (error) {
//             console.error('Error adding comment:', error);
//             toast.error('An error occurred while adding the comment');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return { addComment, loading };
// };

