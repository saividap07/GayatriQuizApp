import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ReviewPage() {

    const { quiz } = useSelector((state) => state.quizReducer);

    return (
        <div>
            <div className="App">
                <br /><br />
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 m-auto border shadow p-4'>
                            <h2 className='text-center'>Review</h2>
                             <br/>

                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Question</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {quiz.map((d) => (
                                        <tr key={d.srNo}>
                                            <td>{d.srNo}</td>
                                            <td>{d.question}</td>

                                            {d.userOpt===0 || d.userOpt===""
                                            ?  
                                            <td style={{ color:'red' }}>Not Answered</td>
                                            :
                                            <td style={{ color:'green' }}>Answered</td> 
                                            }

                                        </tr>
                                    ))} 
                                </tbody>
                            </table>
                            <h7 style={{textAlign:"center", color:"blue"}}>Press The Submit Button To End Test</h7>
                            <br/>
                            <Link to="/">
                                <button style={{float:"left"}} className='btn btn-success'>Back</button>
                            </Link>  
                            <Link to="/result">
                                <button style={{float:"right"}} className='btn btn-success'>Submit</button>
                            </Link>  
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewPage;