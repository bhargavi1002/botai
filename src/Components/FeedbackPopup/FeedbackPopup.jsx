import React, { useState } from 'react';
import './FeedbackPopup.css'; 

const FeedbackPopup =({ open, handleClose, chatId, updateChat}) => {
    
    const [feedback, setFeedback] = useState('');

    const submitFeedback = (e) => {
        e.preventDefault();

        updateChat(prevChats => 
            prevChats.map(chat => 
                chat.id === chatId 
                    ? { ...chat, feedback } 
                    : chat
            )
        );

        setFeedback('');
        handleClose();
    };

    return (
        <div className={`feedback-modal ${open ? 'open' : ''}`}>

            <div className="feedback-content">

                <header className="feedback-header">
                    <div className="header-info">
                        <span className="feedback-icon">&#9997;</span>
                        <h3>Provide Your Feedback</h3>
                    </div>
                    <button className="close-button" onClick={handleClose}>&times;</button>
                </header>

                <form className="feedback-form" onSubmit={submitFeedback}>
                    <textarea
                        placeholder="Share your feedback here..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        rows="5"
                        required
                    />
                    <button className="submit-button" type="submit">
                        Submit Feedback
                    </button>
                </form>

            </div>

        </div>
    );
}
export default FeedbackPopup;