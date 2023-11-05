import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <div style={{height:'100vh'}} className="d-flex w-100 align-items-center justify-content-center bg-dark">
        <div className='rounded d-flex align-items-center justify-content-center flex-column' style={{width:'490px', backgroundColor:"white"}}>
            <img className='img-fluid' style={{width:'400px', height:'330px'}} src="https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-813.jpg" alt="" />
            <h4 className='mb-3'>INSTRUCTIONS</h4>
            <ol className='text-justify m-3' >
                <li>You will be asked 10 questions one after another</li>
                <li>10 point is awarded to the correct answer</li>
                <li>Each question has four options. You can choose only one option</li>
                <li>The result will be decalred at the end of the quiz</li>
            </ol>
            <Link to={'/home'} style={{textDecoration:'none',color:'white'}} className='btn btn-warning mb-5'>LET'S START <i class="fa-solid fa-arrow-right fa-beat"></i></Link>
        </div>
        </div>  
    </>
  )
}

export default LandingPage