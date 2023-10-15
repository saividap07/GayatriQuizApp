import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quiz:[
        {srNo:1, question:'Which of the following command is used to create react-js-app ?', options:[{num:1, opt:'npx create-react-app appname'},{num:2, opt:'npm install create-react-app'},{num:3, opt:'npx install create-react-app -g'},{num:4, opt:'install - l create-react-app'}], answer:1, userOpt:0, crtFlag:0}, {srNo:2, question:'What is the default port number in which the application run ?', options:[{num:1, opt:'3000'},{num:2, opt:'8080'},{num:3, opt:'5000'},{num:4, opt:'3030'}], answer:1, userOpt:0, crtFlag:0}, {srNo:3, question:'Which of the following is a way to handle data in React.js ?', options:[{num:1, opt:'State & Props'},{num:2, opt:'Services & Components'},{num:3, opt:'	State & Services'},{num:4, opt:'State & Component'}], answer:1, userOpt:0, crtFlag:0}, {srNo:4, question:'Which of the following is true regarding Babel ?', options:[{num:1, opt:'Compiler'},{num:2, opt:'Transpilar'},{num:3, opt:'Both of the above'},{num:4, opt:'None of the above'}], answer:3, userOpt:0, crtFlag:0}, {srNo:5, question:'Which of the following is must for the API in React.js ?', options:[{num:1, opt:'SetinitialComponent'},{num:2, opt:'renderComponent'},{num:3, opt:'render'},{num:4, opt:'All of the Above'}], answer:2, userOpt:0, crtFlag:0}, {srNo:6, question:'In React.js, how we can pass the data from one component to another in React.js ?', options:[{num:1, opt:'SetState'},{num:2, opt:'Render with arguments'},{num:3, opt:'render'},{num:4, opt:'All of the Above'}], answer:2, userOpt:0, crtFlag:0}
    ],  
    qid:0,
    crtAns:0,
    defValue:0
}

const QuizOperation = createSlice({
    name:"quiz",
    initialState,
    reducers:{
        // storeAns:(state, payload)=>{
        //     const updatedQues = state.quiz.map((ques)=>{
        //         if(ques.srNo === payload.payload){
        //             // ques.userOpt = payload.payload.userOpt;

        //             if(parseInt(ques.userOpt) === parseInt(ques.answer)){
        //                 state.crtAns = parseInt(state.crtAns)+1;
        //             }
        //         }
        //         return ques;
        //     })

        //     // state.quiz = updatedQues;
        //     state.qid = parseInt(state.qid)+1;
        // },

        storeUserOpt:(state, payload)=>{
            const updatedQue = state.quiz.map((ques)=>{
                if(ques.srNo === payload.payload.srNo){
                    ques.userOpt = payload.payload.userOpt;

                    if(parseInt(payload.payload.userOpt) === parseInt(ques.answer)){
                        if(ques.crtFlag===0){
                            state.crtAns = parseInt(state.crtAns)+1;
                            ques.crtFlag=1;
                        }
                    }

                    else{
                        if(ques.crtFlag===1){
                            state.crtAns = parseInt(state.crtAns)-1;
                            ques.crtFlag=0;
                        }
                    }

                }
                return ques;
            })

            state.quiz = updatedQue;
        },

        nextQuestion:(state)=>{
            state.qid += 1;
        },

        goToQuestion:(state, payload)=>{
            state.qid = payload.payload;
        },
    }
})

export const {storeAns, nextQuestion, goToQuestion, storeUserOpt} = QuizOperation.actions;

export default QuizOperation.reducer;