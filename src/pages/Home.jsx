import React, { useState } from 'react'
import { quizData } from '../data/quizData'
import Result from '../componets/Result'

function Home() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [Score, setScore] = useState(0)
    const [clickedOption, setClickedOption] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const changeQuestion = ()=>{
        updateScore()
        if(currentQuestion<quizData.length-1){
            setCurrentQuestion(currentQuestion+1)
            setClickedOption(0)
        }else{
            setShowResult(true)
        }
    }
    const updateScore = ()=>{
        if(clickedOption===quizData[currentQuestion].answer){
            setScore(Score+1)
        }
    }
    console.log(Score);
  return (
    <div style={{height:'100vh'}} className='d-flex flex-column w-100 align-items-center justify-content-center bg-dark'>
        {showResult ?(
            <Result score={Score} totalScore={quizData.length}/>
        )
            :(
        <>
       <div className='rounded d-flex align-items-center justify-content-center flex-column p-3' style={{width:'490px', backgroundColor:"white"}}>
       <div className='d-flex flex-column justify-content-center align-items-center p-4 shadow mt-3' style={{height:'150px'}}>
        <h6 className='mb-3'>Question No. {currentQuestion+1}</h6>
        <h6> {quizData[currentQuestion].question}</h6>
       </div>
       <div className='w-100 p-5 d-flex justify-content-center align-items-center flex-column'>
        {
            quizData[currentQuestion].options.map((option,i)=>{
                return(
                    <button key={i} onClick={()=>setClickedOption(i+1)} style={{height:'50px'}} className={`fw-bolder btn btn-light text-dark shadow w-100 mb-4 ${clickedOption == i+1?"bg-secondary text-white":null}`}>
                        {option}
                    </button>
                )
            })
        }
               <button onClick={changeQuestion} className='btn btn-warning w-100'>NEXT</button>
       </div>
        </div> 
   
    </>
        )}
        </div>
  )
}

export default Home