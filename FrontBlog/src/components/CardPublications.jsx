export const CardPublications = ({
    title,
    content,
    img,
}) => {
    return (
        <div className="card">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};