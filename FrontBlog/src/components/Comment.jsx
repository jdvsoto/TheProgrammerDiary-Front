import { useGetCommentsByPublication } from '../shared/hooks';
import { useEffect } from 'react';

export const Comment = ({ id }) => {
    const { comments, loading, error, fetchCommentsByPublication } = useGetCommentsByPublication(id);
    console.log("this is the id " + id);
    useEffect(() => {
        fetchCommentsByPublication();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Comments</h1>
            {comments.map((comment) => (
                <div key={comment._id}>
                    <h3> Author:</h3>
                    <p>{comment.author}</p>
                    <h3>Email:</h3>
                    <p>{comment.email}</p>
                    <h3>Comment:</h3>
                    <p>{comment.content}</p>
                </div>
            ))}
        </div>
    );
};