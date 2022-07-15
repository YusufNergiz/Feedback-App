import React, { useContext } from 'react';
import RatingContext from '../Contexts/RatingContext';

const FeedbackRating = () => {

    const {rating, setRating} = useContext(RatingContext);
    
    const ratingNumbers = [];

    const handleChange = (value) => {
        setRating(value)
    }

    for (let i = 1; i < 11; i++) {
        ratingNumbers.push(<li key={i} style={{backgroundColor: rating === i ? '#ff6a95' : '#cccccc', color: rating === i ? 'white' : 'black'}} onClick={() => handleChange(i)}>{i}</li>)
    }
    
    return (
        <ul className='rating'>
            {ratingNumbers.map(item => {
                return (
                    item
                );
            })}
        </ul>
    );
}

export default FeedbackRating;