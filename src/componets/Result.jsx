import React from 'react'
import { Link } from 'react-router-dom'

function Result(props) {
    let score = props.score
    let total = props.totalScore
  return (
    <div className='rounded d-flex align-items-center justify-content-center flex-column p-3' style={{width:'490px', backgroundColor:"white"}}>
     {
     score>3?
     (
       <>
            <img className='img-fluid' style={{width:'200px',height:'200px'}} src="https://img.freepik.com/premium-vector/winner-background-first-place-competition_260559-78.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais"/>
            <h3 className='text-warning'>Congratulations !!</h3>
            <h4>Your Score: {score}/{total}</h4>
            <p className='fw-bolder text-center mt-4'>You did a greate job...! <br /> Learn more by taking another quiz.</p>
            <Link to={'/'} className='btn btn-warning m-3' style={{textDecoration:'none',color:'white'}}>BACK TO HOME</Link>
       </>
     ):
     <>
     <img className='img-fluid' style={{width:'200px',height:'200px'}} src="https://lordicon.com/icons/wired/outline/263-emoji-sad.svg"/>
            <h3 className='text-danger'>You Failed !!</h3>
            <h4>Your Score: {score}/{total}</h4>
            <Link to={'/'} className='btn btn-warning m-3' style={{textDecoration:'none',color:'white'}}>BACK TO HOME</Link>
     </>

     }
    </div>
  )
}

export default Result