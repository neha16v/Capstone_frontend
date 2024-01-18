import React, { useState, useEffect } from 'react';
import up from '../images/arrow-up.png'
import down from '../images/arrow-down.png'
import save from '../images/bookmark.png'
import history from '../images/history.png'
import userr from '../images/user.png'
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css"
import './Viewquestion.css'
import axios from 'axios';
import ReactHtmlParser from "react-html-parser";
import {  useSelector } from 'react-redux';
import { selectUser } from '../Features/userslice';
import { useNavigate } from 'react-router-dom';
const Viewquestion = ({question}) => {
    const [show, setShow] = useState(false)
    const [answer, setAnswer] = useState("");
    const user = useSelector(selectUser)
    const nav = useNavigate()
    const [comment, setComment] = useState("");

    let search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("q");

    const [questionData, setQuestionData] = useState();
    const [count, setCount] = useState(0);
 

    const handleQuill = (value) => {
        setAnswer(value);
    };

    async function getUpdatedAnswer() {
        await axios
            .get(`https://capstone-question-answer-backend.onrender.com/api/user/${id}`)
            .then((res) => {
                for (let x of res.data){
                    if (x._id == id){
                        console.log(x)
                        setQuestionData(x)
                    }
                }
            })
            .catch((err) => console.log(err));
    }

    const handlecomment = async () => {
        if (comment !== "") {
            const body = {
                question_id: id,
                comment: comment,
                user: user,
            };
            await axios.post(`https://capstone-question-answer-backend.onrender.com/api/comments/comments/${id}`, body).then((res) => {
                setComment("");
                setShow(false);
                getUpdatedAnswer();
                console.log(res.data);
            });
        }
    }
    const submit = async () => {
        const body = {
            question_id: id,
            answer: answer,
            user: user,
        };
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        await axios
            .post("https://capstone-question-answer-backend.onrender.com/api/answer/answer", body, config)
            .then(() => {
                alert("Answer added successfully");
                setAnswer("");
                getUpdatedAnswer();
            })
            .catch((err) => console.log(err))
    };
    useEffect(() => {
        async function getFunctionDetails() {
            await axios
                .get(`https://capstone-question-answer-backend.onrender.com/api/user/${id}`)
                .then((res) => {
                    console.log(res.data[0])
                    setQuestionData(res.data[0])
                })
                .catch((err) => console.log(err));
        }
        // getFunctionDetails();
        getUpdatedAnswer()
    }, [id]);
    return (
        <div style={{ paddingLeft: "380px", position: "relative", top: "-680px", height: "0px" }}>
            <div className='d-flex'>
                <div style={{width:'880px'}}><h3>{questionData?.title}</h3></div>
                <div style={{ position:"relative" }}><button style={{ padding: "10px" }} className='ask_question' onClick={() => nav("/question")}>Ask Question</button></div>
            </div>
            <div className='d-flex' style={{ gap: "10px", paddingBottom: "10px" }}>
                <div>Asked: {new Date(questionData?.created_at).toLocaleString()}</div>
                <div>Active: today</div>
                <div>Viewed: 43 times</div>
            </div>
            <div className='d-flex'>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50px" }}>
                    <div><button style={{border:"0", backgroundColor:"white"}} onClick={()=>setCount(count+1)}><img className='up' src={up} ></img></button></div>
                    <div>{count}</div>
                    <div><button  style={{border:"0", backgroundColor:"white"}}onClick={()=>setCount(count-1)}><img className='down' src={down} ></img></button></div>
                    <div><img className='history' src={save} ></img></div>
                    <div><img className='history' src={history} ></img></div>
                </div>
                <div style={{ width: "950px" }}>
                    <div style={{ paddingLeft: "10px" }}>{ReactHtmlParser(questionData?.body)}</div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "cnter", alignItems: "end" }}>
                        <div>asked {new Date(questionData?.created_at).toLocaleString()}</div>
                        <div style={{padding:"10px"}}><img className='user' src={userr} ></img></div>
                    </div>
                    {
                        questionData?.comments && questionData?.comments?.map((_qd) => (
                            <div style={{ marginLeft: '98px', padding:"5px" }}>{_qd?.comment}- <span className='bg-primary' style={{ padding: "3px", borderRadius: '5px' }}>Username:</span>{new Date(_qd.created_at).toLocaleString()}</div>
                        ))
                    }

                    <p style={{ marginLeft: '100px' }} onClick={() => setShow(!show)}><button style={{ border: "0px", backgroundColor: "white", paddingLeft: "1px" }}>Add a comment</button></p>
                    {show && (
                        <div style={{ marginLeft: '100px' }}>
                            <textarea
                                value={comment} onChange={(e) => setComment(e.target.value)}
                                style={{
                                    margin: "5px 0px",
                                    padding: "10px",
                                    border: "1px solid rgba(0, 0, 0, 0.2)",
                                    borderRadius: "3px",
                                    width: '950px'
                                }}
                                type="text"
                                placeholder="Add your comment..."
                                rows={5}
                            />
                            <div><button onClick={handlecomment} className='bg-primary ' style={{ borderRadius: "5px", padding: '5px', border: "0px", paddingLeft: "1px" }}>Add a comment</button></div>
                        </div>
                    )}
                </div>
            </div>
            <div style={{ width: "1002px" }}><hr ></hr></div>
            <div className='d-flex'>
                <div style={{ width: '100px' }}>{questionData && questionData?.answerDetails?.length} Answer(s)</div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50px" }}>
                    <div><img className='up' src={up} ></img></div>
                    <div>0</div>
                    <div><img className='down' src={down} ></img></div>
                    <div><img className='history' src={save} ></img></div>
                    <div><img className='history' src={history} ></img></div>
                </div>
                {
                    questionData?.answerDetails?.map((_q) => (<div key={_q?._id}>

                        <div style={{ width: "850px" }}>
                            <div>{ReactHtmlParser(_q.answer)}</div>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "cnter", alignItems: "end" }}>
                                <div>asked {new Date(_q.created_at).toLocaleString()}</div>
                                <div style={{padding:"10px"}}><img className='user' src={userr} ></img></div>
                            </div>
                        </div>
                    </div>
                    ))
                }

            </div>
            <div style={{ width: "1002px" }}><hr ></hr></div>
            <div style={{ paddingBottom: "10px" }}><b>Your answer</b></div>
            <ReactQuill value={answer} onChange={handleQuill} theme="snow" style={{ height: "200px", width: '1002px' }} />
            <div><button type='submit' onClick={submit} style={{marginTop:"50px", border: "0px",backgroundColor:"blue",cursor:"pointer", padding: "5px", width: "1002px", color: 'white' }}>Post your answer</button></div>
            <div></div>
        </div>
    );
};

export default Viewquestion;