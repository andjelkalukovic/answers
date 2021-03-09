import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data';
import Question from './Question';
import { useState } from 'react';

function App() {
  // eslint-disable-next-line
  const [questions, setQuestions] = useState(data);

  return (
    <main className='container p-4 bg-white'>
      <div className='row justify-content-around'>
        <div className='col-lg-3'>
          <h1>Frequently Asked Questions and Answers</h1>
        </div>

        <div className='col-lg-6'>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
