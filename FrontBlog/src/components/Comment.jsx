import { useGetCommentsByPublication } from '../shared/hooks';
import { useEffect } from 'react';
import '../styles/Comments.css';

export const Comment = ({ id }) => {
    const { comments, loading, error, fetchCommentsByPublication } = useGetCommentsByPublication(id);

    useEffect(() => {
        fetchCommentsByPublication();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className='mainContainer'>
            <h2>Comments</h2>
            <div className="comment-section">

                {comments.length === 0 ? (
                    <p>No comments yet. Be the first to comment!</p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment._id} className="comment">
                            <h3 className="comment-author">Author: {comment.author}</h3>
                            <h3 className="comment-content">Comment:</h3>
                            <p className='comment-txt'>{comment.content}</p>
                        </div>
                    ))
                )}
            </div>
            <button className='btnAddComment'>
                Add Comment
            </button>
        </section>

    );
};
