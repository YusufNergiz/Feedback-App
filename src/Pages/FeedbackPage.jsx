import React from 'react';
import { useContext } from 'react';
import Feedback from '../Components/Feedback';
import FeedbackForm from '../Components/FeedbackForm';
import RatingContext from '../Contexts/RatingContext';

const FeedbackPage = () => {
    
    const {feedbacks} = useContext(RatingContext);

    const average = (
        feedbacks.reduce((acc, { rating }) => acc + rating, 0) / feedbacks.length
      ).toFixed(1);

      return (
        <>
            <FeedbackForm />
            <div style={{margin: "0 auto", width: "750px", height: "20px", position: "relative"}}>
                <h4 className='feedback-count'>{`Number of Reviews ${feedbacks.length}`}</h4>
                <h4 className='feedback-average'>Average Rating: {isNaN(average) ? 0 : average}</h4>
            </div>
            <div className='feedbacks-div'>
                {feedbacks.map(feedback => {
                    return (
                        <Feedback message={feedback.message} key={feedback.id} rating={feedback.rating} id={feedback.id}/>
                    );
                })}
            </div>
        </>
    );
}

export default FeedbackPage;