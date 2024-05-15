import { useGetPublicationById } from '../shared/hooks';
import { useEffect } from 'react';

export const InfoPublication = ({ id }) => {
    const { publications, loading, error, fetchPublicationById } = useGetPublicationById(id);
    console.log("this is the id " + id);
    useEffect(() => {
        fetchPublicationById();
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>{publications.title}</h1>
            <h2>{publications.subTitle}</h2>
            <img src={publications.img} alt={publications.title} />
            <p>{publications.content}</p>
        </div>
    );
};