import { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar';
import { InfoPublication } from '../../components/InfoPublication';
import { useParams } from 'react-router-dom';
import { Comment } from '../../components/Comment';
import { AddComment } from '../../components/AddComment';
import { getCommentsByPublication } from '../../services';
export const InfoPublicationPage = () => {

    const params = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            const fetchedComments = await getCommentsByPublication(params.id);
            setComments(fetchedComments);
        };
        fetchComments();
    }, [params.id]);

    return (
        <div>
            <Navbar />
            <InfoPublication id={params.id} />
            <Comment id={params.id} comments={comments}/>
            <div style={{
                marginTop: '50px',
            }}>
                <AddComment publication={params.id}/>
            </div>

        </div>
    );
};