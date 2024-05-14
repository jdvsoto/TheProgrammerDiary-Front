import React from 'react';
import useGetPublications from '../shared/hooks/useGetPublications';
import { CardPublications } from './CardPublications'

export const Publication = () => {
    const { publications, loading, error } = useGetPublications();

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {publications.map(publication => (
                <CardPublications
                    key={publication._id}
                    title={publication.title}
                    content={publication.content}
                    img={publication.img}
                />
            ))}
        </div>
    );
}; 