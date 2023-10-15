import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

import { storeAns } from '../slices/QuizSlice';


function ResultPage() {

    const { quiz } = useSelector((state) => state.quizReducer);
    const { crtAns } = useSelector((state) => state.quizReducer);

    const val = 1;
    console.log("crct Ans:"+ crtAns);

    return (
        <div>
              

            <div className='container'>
            <div className="row ">
                <div className='col-7 m-auto border shadow p-4'>
                            <Link to="/" style={{ float: 'left' }}>
                                <button className='btn btn-success'>Back</button>
                            </Link><br /><br />

                            <div style={{textAlign:"center"}}>
                                <h2 style={{color:"blue"}}>Score Card</h2>
                                <h3 className='mt-3'>Your Score is {crtAns}/6</h3>
                                {crtAns>=5 ?<h6 className='text-success'>Excellent!! Congratulations on Your Result</h6>:crtAns>=3 ? <h6 className='text-warning'>Good! Try Harder Next Time</h6> : <h6 className='text-danger'>Poor! Pay Attention and Come Back Stronger</h6>}
                            </div>

                            
                    </div>
                </div>
                    <br/>
                    <div className="col-7 m-auto mt-5 border shadow p-4">
                    <h4 className="text-center">Assessment of Answers</h4>
                    {quiz.map((ques)=>(
                        <div className='mt-4'>                        
                        <hr></hr>

                        <h4 style={{color:parseInt(ques.userOpt)===0 || ques.userOpt===""?"lightgray":""}}> {parseInt(ques.userOpt)===0 || ques.userOpt===""?"":ques.crtFlag===0?<FontAwesomeIcon icon={faTimes} style={{color:"red"}} size="1x" />:<FontAwesomeIcon icon={faCheck} style={{color:"green"}} size="1x" />} {ques.srNo}.{ques.question}</h4>

                        <div style={{height:'15%', backgroundColor:ques.answer===1? "#90ee90" :parseInt(ques.userOpt)===1 ? "#FFCCCB" : "LightGray", color:"black"}}>
                            <h5 style={{marginLeft:"50px"}}>{ques.options[0].opt}</h5>
                        </div>

                        <div style={{height:'15%', backgroundColor:ques.answer===2? "#90ee90" :parseInt(ques.userOpt)===2 ? "#FFCCCB" : "LightGray", color:"black"}}>
                            <h5 style={{marginLeft:"50px"}}>{ques.options[1].opt}</h5>
                        </div>

                        <div style={{height:'15%', backgroundColor:ques.answer===3? "#90ee90" :parseInt(ques.userOpt)===3 ? "#FFCCCB" : "LightGray", color:"black"}}>
                            <h5 style={{marginLeft:"50px"}}>{ques.options[2].opt}</h5>
                        </div>

                        <div style={{height:'15%', backgroundColor:ques.answer===4? "#90ee90" :parseInt(ques.userOpt)===4 ? "#FFCCCB" : "LightGray", color:"black"}}>
                            <h5 style={{marginLeft:"50px"}}>{ques.options[3].opt}</h5>
                        </div>


                        </div>

                    ))}
                        {/* <h4 className="text-center">Assessment of Answers</h4>
                        <hr></hr>
                        <h4 >Question </h4>

                        <h4> {quiz[1].srNo}.{quiz[1].question}</h4>

                        <div style={{height:'13%', backgroundColor:val===0? "red" :"lightGray", color:"black"}}>
                            <h5 style={{marginLeft:"50px"}}>Hi</h5>
                        </div> */}
                        {/* <div className="form-check">
                            <input className="form-check-input" value={parseInt(1)} type="radio" name="quizOption" />
                            <label className="form-check-label"  style={{ float: "left" }}> {quiz[1].options[0].opt}</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" value={parseInt(2)} type="radio" name="quizOption" />
                            <label className="form-check-label"  style={{ float: "left" }}> {quiz[1].options[1].opt}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" value={parseInt(3)} type="radio" name="quizOption" />
                            <label className="form-check-label"  style={{ float: "left" }}> {quiz[1].options[2].opt}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" value={parseInt(4)} type="radio" name="quizOption" />
                            <label className="form-check-label" style={{ float: "left" }}> {quiz[1].options[3].opt}</label>
                        </div> */}

                        {/* {quiz[1].srNo==quiz.length?
                        <Link to='/score' className="btn btn-success " style={{ float: 'right' }} onClick={ ()=>{dispatch(storeAns({srNo:quiz[1].srNo,userOpt:opt}))}}  >Submit</Link>
                        :
                        <Link to='/' className="btn btn-warning " style={{ float: 'right' }} onClick={ ()=>{dispatch(storeAns({srNo:quiz[1].srNo, userOpt:opt}))}}>Next Question</Link>
                        }
                        <br></br> */}
                    </div>

                </div>
        
        </div>
    );
}

export default ResultPage