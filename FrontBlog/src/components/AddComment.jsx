import { useState } from 'react';
import { Input } from './Input';
import { useAddComment } from '../shared/hooks';

export const AddComment = ({ publication }) => {
    const { addComment, loading } = useAddComment();

    const [formState, setFormState] = useState({
        author: {
            value: '',
            isValid: false,
            showError: false,
        },
        email: {
            value: '',
            isValid: false,
            showError: false,
        },
        content: {
            value: '',
            isValid: false,
            showError: false,
        },
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addComment(
            formState.author.value,
            formState.email.value,
            formState.content.value,
            publication
        );
        setFormState({
            author: {
                value: '',
                isValid: false,
                showError: false,
            },
            email: {
                value: '',
                isValid: false,
                showError: false,
            },
            content: {
                value: '',
                isValid: false,
                showError: false,
            },

        }); // Limpia el formulario después de agregar el comentario
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} style={{
                    marginTop: '0px',
                    width: '35%',
                    height: 'auto',
                }}>
                    <h1>Add Comment</h1>
                    <Input
                        field="author"
                        label="Author"
                        value={formState.author.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                    />
                    <Input
                        field="email"
                        label="Email"
                        value={formState.email.value}
                        onChangeHandler={handleInputValueChange}
                        type="email"
                    />
                    <Input
                        field="content"
                        label="Content"
                        value={formState.content.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                    />
                    <button type="submit" disabled={loading} style={{
                        marginTop: '40px',
                    }}>
                        {loading ? 'Loading...' : 'Add Comment'}
                    </button>
                </form>
            </div>
        </>
    );
};

// import { useState } from 'react';
// import { Input } from './Input';
// import { useAddComment } from '../shared/hooks';

// export const AddComment = ({ publication, comments, setComments }) => {
//     const { addComment, loading } = useAddComment();

//     const [formState, setFormState] = useState({
//         author: {
//             value: '',
//             isValid: false,
//             showError: false,
//         },
//         email: {
//             value: '',
//             isValid: false,
//             showError: false,
//         },
//         content: {
//             value: '',
//             isValid: false,
//             showError: false,
//         },
//     });

//     const handleInputValueChange = (value, field) => {
//         setFormState((prevState) => ({
//             ...prevState,
//             [field]: {
//                 ...prevState[field],
//                 value,
//             },
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newComment = await addComment(
//             formState.author.value,
//             formState.email.value,
//             formState.content.value,
//             publication
//         );
//         if (newComment) {
//             setComments([...comments, newComment]);
//             // Limpia el formulario después de agregar el comentario
//             setFormState({
//                 author: {
//                     value: '',
//                     isValid: false,
//                     showError: false,
//                 },
//                 email: {
//                     value: '',
//                     isValid: false,
//                     showError: false,
//                 },
//                 content: {
//                     value: '',
//                     isValid: false,
//                     showError: false,
//                 },
//             });
//         }
//     };

//     return (
//         <div className="container">
//             <form onSubmit={handleSubmit} style={{
//                 marginTop: '0px',
//                 width: '35%',
//                 height: 'auto',
//             }}>
//                 <h1>Add Comment</h1>
//                 <Input
//                     field="author"
//                     label="Author"
//                     value={formState.author.value}
//                     onChangeHandler={handleInputValueChange}
//                     type="text"
//                 />
//                 <Input
//                     field="email"
//                     label="Email"
//                     value={formState.email.value}
//                     onChangeHandler={handleInputValueChange}
//                     type="email"
//                 />
//                 <Input
//                     field="content"
//                     label="Content"
//                     value={formState.content.value}
//                     onChangeHandler={handleInputValueChange}
//                     type="text"
//                 />
//                 <button type="submit" disabled={loading} style={{
//                     marginTop: '40px',
//                 }}>
//                     {loading ? 'Loading...' : 'Add Comment'}
//                 </button>
//             </form>
//         </div>
//     );
// };
