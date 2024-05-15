import React from 'react';
import useGetPublications from '../shared/hooks/useGetPublications';
import { CardPublications } from './CardPublications'
import { Link } from 'react-router-dom';
export const Publication = () => {
    const { publications, loading, error } = useGetPublications();

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <section className='cards-container'>
            {publications.map(publication => (
                <Link to={`/publicationContent/${publication._id}`} className="card">

                    <CardPublications
                        key={publication._id}
                        title={publication.title}
                        subTitle={publication.subTitle}
                        img={publication.img}
                    />
                </Link>
            ))}
        </section>
    );
}; 