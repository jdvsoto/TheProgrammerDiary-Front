import { useEffect, useState } from 'react';
import { useGetCommentsByPublication } from '../shared/hooks';
import { useDeleteComment } from '../shared/hooks';
import '../styles/Comments.css';

export const Comment = ({ id }) => {
    const { comments, loading, error, fetchCommentsByPublication } = useGetCommentsByPublication(id);
    const { deleteCommentById } = useDeleteComment();
    const [localComments, setLocalComments] = useState([]);

    useEffect(() => {
        fetchCommentsByPublication();
        setLocalComments(comments);
    }, [id, comments]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const handleDelete = async (id) => {
        try {
            await deleteCommentById(id);
            setLocalComments(localComments.filter(comment => comment._id !== id));
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    return (
        <section className='mainContainer'>
            <h2>Comments</h2>
            <div className="comment-section">
                {comments.length === 0 ? (
                    <p>No comments yet. Be the first to comment!</p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment._id} className="comment">
                            <div className='btn-delete-container'>
                                <button onClick={() => handleDelete(comment._id)} className='delete-button-comment'>X</button>
                            </div>
                            <h3 className="comment-author">Author: {comment.author}</h3>
                            <h3 className="comment-content">Comment:</h3>
                            <div className='comment-txt-container'>
                                <p className='comment-txt'>{comment.content}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>

    );
};
