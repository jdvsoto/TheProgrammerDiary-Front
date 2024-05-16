import { Navbar } from '../../components/Navbar';
import { InfoPublication } from '../../components/InfoPublication';
import { useParams } from 'react-router-dom';
import { Comment } from '../../components/Comment';

export const InfoPublicationPage = () => {
    
    const params = useParams();
    return (
        <div>
            <Navbar />
            <InfoPublication id={ params.id } />
            <Comment id={ params.id } />
        </div>
    );
};