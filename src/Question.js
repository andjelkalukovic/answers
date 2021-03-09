import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'

const Question = ({ title, info }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <article className='p-3 my-2'>
            <header className='d-flex justify-content-between align-center'>
                <h4>{title}</h4>
                <div>
                    <Button className='mx-3' variant="outline-secondary"
                        onClick={() => setShowAnswer(!showAnswer)}>
                        {showAnswer ? '-' : '+'}
                    </Button>
                </div>
            </header>
            {showAnswer && <p>{info}</p>}
        </article>)
}
export default Question;