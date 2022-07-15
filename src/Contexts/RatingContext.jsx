import { createContext, useEffect, useState } from "react";
import { data } from "../Components/data";

const RatingContext = createContext();

export function RatingProvider({children}) {
    
    const [feedbacks, setFeedbacks] = useState([]);

    const [rating, setRating] = useState(10);

    const [message, setMessage] = useState('');

    const [edit, setEdit] = useState({edit: false, id: '', message: '', rating: 10});

    const getFeedbacks = async () => {
        const response = await fetch("http://localhost:5000/feedback");
        const data = await response.json();
        setFeedbacks(data);
    }

    useEffect(() => {
        getFeedbacks();
    }, [])

    const addFeedback = async (feedback) => {
        const response = await fetch("http://localhost:5000/feedback", {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(feedback)});
        const data = await response.json();
        setFeedbacks(prevFeedbacks => [data, ...prevFeedbacks]);
    }

    const deleteFeedback = async (id) => {
        const response = await fetch(`http://localhost:5000/feedback/${id}`, {method: 'DELETE'});
        setFeedbacks(prevFeedbacks => prevFeedbacks.filter((feedback) => feedback.id !== id))
    }

    const editFeedback = async (fId) => {
        feedbacks.map(feedback => {
            if (feedback.id === fId) {
                setEdit({edit: true, id: fId, message: feedback.message, rating: feedback.rating});
                document.getElementById('message').value = feedback.message;
                setRating(feedback.rating);
                setMessage(feedback.message);
            }
        })
    } 

    const editFeedbackInDatabase = async (id, message, rating) => {
        const response = await fetch(`http://localhost:5000/feedback/${id}`, {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({message: message, rating: rating})})
    }
    
    return (
        <RatingContext.Provider value={{feedbacks, rating, setRating, setFeedbacks, message, setMessage, deleteFeedback, editFeedback, edit, setEdit, addFeedback, editFeedbackInDatabase}}>{children}</RatingContext.Provider>
    );
}

export default RatingContext;