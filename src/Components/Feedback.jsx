import React from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import RatingContext from '../Contexts/RatingContext';
import { useContext } from 'react';

const Feedback = (props) => {

    const {deleteFeedback, editFeedback} = useContext(RatingContext);

    return (
        <div className='feedback-div'>
            <h2 className='rating-circle'>{props.rating}</h2>
            <h5 className='delete-button' onClick={() => deleteFeedback(props.id)}><FaTimes /></h5>
            <h5 className='edit-button' onClick={() => editFeedback(props.id)}><FaEdit /></h5>
            <p>{props.message}</p>
        </div>
    );
}

export default Feedback;