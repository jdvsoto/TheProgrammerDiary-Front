import React from 'react';
import { useState, useEffect } from 'react';
import useGetPublications from '../shared/hooks/useGetPublications';
import { useDeletePublication } from '../shared/hooks'; 
import { CardPublications } from './CardPublications';
import { Link } from 'react-router-dom';

export const Publication = () => {
    const { publications, loading, error, refetch } = useGetPublications();
    const { deletePublicationById } = useDeletePublication();
    const [localPublications, setLocalPublications] = useState([]);

    useEffect(() => {
        setLocalPublications(publications);
    }, [publications]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleDelete = async (id) => {
        try {
            await deletePublicationById(id);
            setLocalPublications(localPublications.filter(publication => publication._id !== id));
        } catch (error) {
            console.error('Error al eliminar la publicación:', error);
        }
    };

    return (
        <section className='cards-container'>
            {localPublications.map(publication => (
                <div className="card" key={publication._id}>
                    <button onClick={() => handleDelete(publication._id)} className="delete-button">X</button>
                    <Link to={`/publicationContent/${publication._id}`} className='linkPublication'>
                        <CardPublications
                            key={publication._id}
                            title={publication.title}
                            subTitle={publication.subTitle}
                            img={publication.img}
                        />
                    </Link>
                </div>
            ))}
        </section>
    );
};