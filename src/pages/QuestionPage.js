import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { storeAns, goToQuestion, storeUserOpt , nextQuestion} from '../slices/QuizSlice';

function QuestionPage() {

    var opt = "";

    const dispatch = useDispatch();

    const {quiz} = useSelector((state) => state.quizReducer);

    const {qid} = useSelector((state) => state.quizReducer);

    const {crtAns} = useSelector((state)=> state.quizReducer);

    const {defValue} = useSelector((state)=> state.quizReducer);


    const handlChange = (e)=>{
        
        opt = e.target.value;
        const srNo = quiz[qid].srNo;
        dispatch(storeUserOpt({srNo:srNo, userOpt:opt}))
    }

    const handleClick = (id)=>{
        dispatch(goToQuestion(parseInt(id)-1));
    }

    console.log(quiz);
    console.log(qid);
    console.log("Correct Answers:" + crtAns);
    // console.log(quiz[qid].options[1].opt);
    // console.log(quiz[qid].options[2].opt);
    // console.log(quiz[qid].options[3].opt);


    return (
        <div>
        {/* <FontAwesomeIcon icon={faCoffee} style={{color:"red"}} size="3x" /> */}

                <div className='container'>
                <div className="row ">
                <div className="col-3 border mt-5 shadow p-4">
            <h3 className="text-center">No. of Questions</h3>
            <hr />

              {quiz.map((e) => (
                  <span key={e.srNo} className="d-inline">
                  
                              <Link to="" className={parseInt(e.userOpt)===0 || e.userOpt===""?"btn btn-danger m-1":"btn btn-success m-1"} onClick={()=>handleClick(e.srNo)}>
                                  {e.srNo}
                              </Link>

                  </span>
              ))}
        </div>
                    <div className="col-8 m-auto mt-5 border shadow p-4">
                        <h4 className="text-center">Exam Form</h4>
                        <hr></hr>
                        <h4 >Question </h4>

                        <h4> {quiz[qid].srNo}.{quiz[qid].question}</h4>
                        <div className="form-check">
                            <input className="form-check-input" value={parseInt(1)} onChange={handlChange} type="radio" name="quizOption" checked={parseInt(quiz[qid].userOpt)===1}/>
                            <label className="form-check-label"  style={{ float: "left" }}> {quiz[qid].options[0].opt}</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" value={parseInt(2)} onChange={handlChange} type="radio" name="quizOption" checked={parseInt(quiz[qid].userOpt)===2}/>
                            <label className="form-check-label"  style={{ float: "left" }}> {quiz[qid].options[1].opt}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" value={parseInt(3)} onChange={handlChange} type="radio" name="quizOption" checked={parseInt(quiz[qid].userOpt)===3}/>
                            <label className="form-check-label"  style={{ float: "left" }}> {quiz[qid].options[2].opt}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" value={parseInt(4)} onChange={handlChange} type="radio" name="quizOption" checked={parseInt(quiz[qid].userOpt)===4}/>
                            <label className="form-check-label" style={{ float: "left" }}> {quiz[qid].options[3].opt}</label>
                        </div>

                        {quiz[qid].srNo===quiz.length?
                        <Link to='/review' className="btn btn-success " style={{ float: 'right' }} onClick={ ()=>{dispatch(nextQuestion())}}>Submit</Link>
                        :
                        <Link to='/' className="btn btn-warning" style={{ float: 'right' }} onClick={ ()=>{dispatch(nextQuestion())}}>Next Question</Link>
                        }
                        <br></br>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default QuestionPage