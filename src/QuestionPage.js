import React from 'react';
import './QuestionPage.css';
import { Button, Typography } from '@mui/joy';

function QuestionPage({ question, onAnswer }) {
    return (
        <div className="question-page">
            <Typography level="h2">{question}</Typography>
            <br />
            <div className="button-container">
                <Button style={{width: '150px'}} size="lg" color='success'  onClick={() => onAnswer('Yes')}>네</Button>
                <Button style={{width: '150px'}} size="lg" color="success" onClick={() => onAnswer('No')}>아니오</Button>
            </div>
        </div>
    );
}

export default QuestionPage;