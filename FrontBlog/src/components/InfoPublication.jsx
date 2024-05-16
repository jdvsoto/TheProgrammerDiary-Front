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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Los meses en JavaScript comienzan desde 0
        const day = ('0' + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
    };
    return (
        <div className="container">
            <h1 className="title">{publications.title}</h1>
            <h2 className="subtitle">{publications.subTitle}</h2>
            <img className="image" src={publications.img} alt={publications.title} />
            <div>
                <p className="author">Autor: {publications.author}</p>
                <p className="date">Fecha de publicación: {formatDate(publications.createdAt)}</p>
            </div>
            <p className='content'>{publications.content}</p>
        </div>
    );
};