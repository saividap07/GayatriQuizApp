import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { storeAns } from '../slices/QuizSlice';

function ScorePage() {

    const { quiz } = useSelector((state) => state.quizReducer);
    const { crtAns } = useSelector((state) => state.quizReducer);


    console.log("crct Ans:"+ crtAns);

    return (
        <div>
            <div className="App">
                <br /><br />
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 m-auto border shadow p-4'>
                            <Link to="/" style={{ float: 'left' }}>
                                <button className='btn btn-success'>Back</button>
                            </Link><br /><br />

                            <div>
                                <h2 style={{color:"blue"}}>Score Card</h2>
                                <h3 className='mt-3'>Your Score is {crtAns}/6</h3>
                                {crtAns>=5 ?<h6 className='text-success'>Excellent!! Congratulations on Your Result</h6>:crtAns>=3 ? <h6 className='text-warning'>Good! Try Harder Next Time</h6> : <h6 className='text-danger'>Poor! Pay Attention and Come Back Stronger</h6>}
                            </div>

                            <Link to="/result" style={{ float: 'right' }}>
                                <button className='btn btn-success'>Assess your Answers</button>
                            </Link><br /><br />

                            {/* <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Question</th>
                                        <th>Option</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {quiz.map((d) => (
                                        <tr key={d.id}>
                                            <td>{d.id}</td>
                                            <td>{d.question}</td>
                                            <td>{d.option}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScorePage