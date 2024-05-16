import { useState } from "react";
import { Input } from "./Input";
import { useAddPublication } from "../shared/hooks";

export const AddPublication = () => {
    const { addPublication, loading } = useAddPublication();

    const [formState, setFormState] = useState({
        title: {
            value: '',
            isValid: false,
            showError: false,
        },
        subTitle: {
            value: '',
            isValid: false,
            showError: false,
        },
        content: {
            value: '',
            isValid: false,
            showError: false,
        },
        author: {
            value: '',
            isValid: false,
            showError: false,
        },
        img: {
            value: '',
            isValid: false,
            showError: false,
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPublication(
            formState.title.value,
            formState.subTitle.value,
            formState.content.value,
            formState.author.value,
            formState.img.value
        );
    };

    return (
        <>
            <div className="design" />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Add Publication</h1>
                    <Input
                        field={'title'}
                        label="Title"
                        value={formState.title.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        className="inputStyle"
                    />
                    <Input
                        field={'subTitle'}
                        label="Caption"
                        value={formState.subTitle.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                    />
                    <Input
                        field={'content'}
                        label="Content"
                        value={formState.content.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                    />
                    <Input
                        field={'author'}
                        label="Author"
                        value={formState.author.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                    />
                    <Input
                        field={'img'}
                        label="Image"
                        value={formState.img.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                    />
                    <button type="submit">
                        {loading ? 'Loading...' : 'Add Publication'}
                    </button>
                </form>
            </div>
        </>
    );
};