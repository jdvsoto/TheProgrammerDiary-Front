import { useGetPublicationById } from '../shared/hooks';
import { useEffect } from 'react';
import '../styles/InfoPublication.css';

export const InfoPublication = ({ id }) => {
    const { publications, loading, error, fetchPublicationById } = useGetPublicationById(id);
    console.log("this is the id " + id);
    useEffect(() => {
        fetchPublicationById();
    }, [id]);

    if (loading) return <p className="loading">Cargando...</p>;
    if (error) return <p className="error">Error: {error.message}</p>;

    return (
        <div className="container">
            <h1 className="title">{publications.title}</h1>
            <h2 className="subtitle">{publications.subTitle}</h2>
            <img className="image" src={publications.img} alt={publications.title} />
            <p className='content'>{publications.content}</p>
        </div>
    );
};