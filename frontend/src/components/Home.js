import React from 'react'
import './Home.css'

const Home = ({ isAuth }) => {
    return (
        <div>
            <p className="imgclass">Think about what a parent wants to see when they visit the website for their child school: they want engagement.</p>
            <img src="./images/Education.jpg" height={300} width={300} className="imgclass" alt="Home pic" />

            <div className='headclass mt-2'>
                <p>Quizzing competition is to encourage students to look beyond their textual 
                    knowledge and establish a relationship between theory and application of the learnt concepts.</p>
                
                <img src="./images/quiz.jpg" className='quizimage' alt="quiz pic"/>
            </div>

            <div className='headclass mt-2'>
                <p>Live chat allows you to give quick answers to questions about your products, solve problems 
                    faster, and assure your customers that you're there when they need you.</p>
                
                <img src="./images/Livechat.jpg" className='quizimage' alt="Live chat pic"/>
            </div>

            <div className='headclass mt-2'>
                <p>The preference doesn't apply to the 'Attachments' related list for Task and Event objects. 
                Files added to the Attachments related list on activities will always be added as attachment records and not Files.</p>
                
                <img src="./images/uploadnote.png" className='quizimage' alt="upload notes pic"/>
            </div>

        </div>
    )
}

export default Home
