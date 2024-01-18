import React from 'react';
import './Main_questionpage.css'
import sort from '../images/sort.png'
import pen from '../images/pen.png'
import message from '../images/message.png'
import stackoveflow from '../images/stackoverflow.png'
import { useNavigate } from 'react-router-dom';
import Allquestions from './Allquestions';

const Main_questionpage = ({ question }) => {
    const nav = useNavigate()
    return (
        <div style={{ paddingLeft: "380px", position: "relative", top: "-680px", height: "0px" }}>
            <div className='d-flex' style={{ paddingBottom: "10px" }}>
                <div><h3>All Questions</h3></div>
                <div style={{ paddingLeft: "740px" }}><button style={{ padding: "10px" }} className='ask_question' onClick={() => nav("/question")}>Ask Question</button></div>
            </div>
            {/* <div className='d-flex'>
                <div><h5>{question && question.length} Questions</h5></div>
                <div style={{ paddingLeft: "630px" }}><button className='new'>Newest</button><button className='active'>Active</button><button className='more'>More</button></div>
                <div className='d-flex' style={{ paddingLeft: "20px" }}>
                    <div><img style={{ position: "absolute", top: '60px', left: "1318px" }} className='sort' src={sort}></img></div>
                    <div><button style={{ paddingLeft: "25px", borderRadius: "5px" }}>Filter</button></div>
                </div>
            </div> */}
            <div className='mainbar'>
                {question?.map((_q, index) => (
                    <div key={index}>
                        <Allquestions question={_q} />
                    </div>
                ))}
            </div>

            <div style={{ position: "absolute",top:"100px", right:"50px", backgroundColor: "rgb(243, 229, 171)", width: "320px" }}>
                <div>
                    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}><b>The Overflow Blog</b></div>
                    <hr></hr>
                </div>
                <div >
                    <div style={{ paddingLeft: "10px" }}><img style={{ height: "20px", paddingLeft: "10px", paddingRight: "10px" }} src={pen}></img>Observality is the key to the future of software (and your devOps carrer)</div>
                </div>
                <div >
                    <div style={{ paddingLeft: "10px" }}><img style={{ height: "20px", paddingLeft: "10px", paddingRight: "10px" }} src={pen}></img>Podcast 374: How valuable is your screen name?</div>
                    <hr></hr>
                </div>
                <div >
                    <div style={{ paddingLeft: "10px" }}><b>Featured on Meta</b></div>
                    <hr></hr>
                </div>
                <div >
                    <div style={{ paddingLeft: "10px" }}><img style={{ height: "20px", paddingLeft: "10px", paddingRight: "10px" }} src={message}></img>Review queue workflows -  Final release...</div>
                </div>
                <div >
                    <div style={{ paddingLeft: "10px" }}><img style={{ height: "20px", paddingLeft: "10px", paddingRight: "10px" }} src={message}></img>Please welcome Valued Associates: #958 - V2Blast #959 - SpeNcerG</div>
                </div>
                <div >
                    <div style={{ paddingLeft: "10px" }}><img style={{ height: "20px", paddingLeft: "10px", paddingRight: "10px" }} src={stackoveflow}></img>Outdated Answers: accepted answer is now unpinned on Stackoverflow</div>
                    <hr></hr>
                </div>
                <div >
                    <div style={{ paddingLeft: "10px" }}><b>Hot Meta Posts</b></div>
                    <hr></hr>
                </div>
                <div >
                    <div style={{ padding: "10px" }}><b>38</b> Why was this spam flag declined, yet the question marked as spam?</div>
                </div>
                <div >
                    <div style={{ padding: "10px" }}><b>20</b> What is the bestcourse of action when a user has high enough rap to...</div>
                </div>
                <div style={{ padding: "10px" }}><b>14</b> Is a link to the "How to ask" help page a usefull comment</div>
            </div>
        </div>
    );
};

export default Main_questionpage;