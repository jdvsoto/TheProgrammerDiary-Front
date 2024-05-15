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

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case 'title':
                isValid = validatePublications(value);
                break;
            case 'subTitle':
                isValid = validatePublications(value);
                break;
            case 'content':
                isValid = validatePublications(value);
                break;
            case 'author':
                isValid = validatePublications(value);
                break;
            case 'img':
                isValid = validatePublications(value);
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
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

    // const isSubmitButtonDisabled = loading || !formState.title.isValid || !formState.subTitle.isValid || !formState.content.isValid || !formState.author.isValid || !formState.img.isValid;


    return (
        <>
            <div className="design" />
            <div className="container">
                <form onSubmit={handleSubmit} className="formAddPublications">
                    <h1>Add Publication</h1>
                    <Input
                        field={'title'}
                        label="Title"
                        value={formState.title.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        onBlurHandler={handleInputValidationOnBlur}
                    // showErrorMessage={formState.title.showError}
                    // validationMessage={validatePublicationsMessage}
                    />
                    <Input
                        field={'subTitle'}
                        label="Caption"
                        value={formState.subTitle.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        onBlurHandler={handleInputValidationOnBlur}
                    // showErrorMessage={formState.subTitle.showError}
                    // validationMessage={validatePublicationsMessage}
                    />
                    <Input
                        field={'content'}
                        label="Content"
                        value={formState.content.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        onBlurHandler={handleInputValidationOnBlur}
                    // showErrorMessage={formState.content.showError}
                    // validationMessage={validatePublicationsMessage}
                    />
                    <Input
                        field={'author'}
                        label="Author"
                        value={formState.author.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        onBlurHandler={handleInputValidationOnBlur}
                    // showErrorMessage={formState.author.showError}
                    // validationMessage={validatePublicationsMessage}
                    />
                    <Input
                        field={'img'}
                        label="Image"
                        value={formState.img.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        onBlurHandler={handleInputValidationOnBlur}
                    // showErrorMessage={formState.img.showError}
                    // validationMessage={validatePublicationsMessage}
                    />
                    <button type="submit">
                        {loading ? 'Loading...' : 'Add Publication'}
                    </button>
                </form>
            </div>
        </>
    );
};