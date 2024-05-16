export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field);
    }

    return (
        <>
            <section className="input-container">
                <div className="lbl-container">
                    <label>{label}</label>
                </div>
                {label === 'Content' ? (
                    <textarea
                        value={value}
                        onChange={handleValueChange}
                        className="textAreaStyle"
                    />
                ) : (
                    <input
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                    />
                )}
            </section>
        </>

    );
};