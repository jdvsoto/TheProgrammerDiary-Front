import { Navbar } from '../../components/Navbar';
import { InfoPublication } from '../../components/InfoPublication';
import { useParams } from 'react-router-dom';

export const InfoPublicationPage = () => {
    
    const params = useParams();
    return (
        <div>
            <Navbar />
            <InfoPublication id={ params.id } />
        </div>
    );
};