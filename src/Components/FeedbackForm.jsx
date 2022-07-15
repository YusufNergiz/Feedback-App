import React from 'react';
import FeedbackRating from './FeedbackRating';
import RatingContext from '../Contexts/RatingContext';
import { useContext } from 'react';

const FeedbackForm = () => {

    const {rating, setFeedbacks, setRating, setMessage, message, edit, setEdit, addFeedback, editFeedback, editFeedbackInDatabase} = useContext(RatingContext);

    const changeMessage = () => {
        setMessage(document.getElementById('message').value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (edit.edit === true) {
            setFeedbacks(prevFeedbacks => prevFeedbacks.map(feedback => {
                return feedback.id === edit.id ? {...feedback, message: message, rating: rating} : feedback
            }))
            editFeedbackInDatabase(edit.id, message, rating);
            editFeedback()
            setEdit({edit: false, id: '', message: '', rating: 10});
            setRating(10);
            setMessage('');
            document.getElementById('message').value = "";
            alert("Your feedback has been edited successfully!");
        }
        else if (edit.edit === false) {
            if (message.replace(/\s/g, '').length > 10) {
                addFeedback({message: message, rating: rating})
                setRating(10);
                setMessage('');
                document.getElementById('message').value = "";
            }
            else {
                alert("Please enter more than 10 characters!");
            }
        }
    }
    
    return (
        <div className='feedback-form'>
            <h2>How was our Service?</h2>
            <FeedbackRating />
            <form onSubmit={handleSubmit}>
                <input type="text" id="message" className='feedback-message-input' placeholder='Write a Review!' onChange={changeMessage}/>
                <button type='submit' className='submit-button'>Send</button>
            </form>
        </div>
    );
}

export default FeedbackForm;