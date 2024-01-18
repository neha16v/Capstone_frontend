import React from 'react';
import ReactHtmlParser from "react-html-parser";
import user from '../images/user.png'
import { useNavigate } from 'react-router-dom';

const Allquestions = ({ question }) => {
    const nav = useNavigate()
    console.log(question)
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <div style={{width:"100px"}}>
            <div className='d-flex' style={{ paddingTop: "25px", gap: "20px", width:"500px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ padding: "2px" }}>0</div>
                    <div style={{ padding: "2px" }}>Votes</div>
                    <div style={{ padding: "2px" }}>{question?.answerDetails?.length}</div>
                    <div style={{ padding: "2px" }}>Answers</div>
                    <div style={{ padding: "2px" }}>0 Views</div>
                </div>
                <div>
                    {question && (
                        <div className='text-primary' style={{ paddingBottom: "5px" }} onClick={() => nav(`/viewquestion?q=${question?._id}`)}>
                            <button className='text-primary' style={{ backgroundColor: "white", border: "0px", paddingLeft: "1px" }}>
                                {question?.title}
                            </button>
                        </div>
                    )}
                    <div style={{ paddingBottom: "15px", width: "500px" }}>{ReactHtmlParser(truncate(question?.body, 200))}</div>
                    {
                        question && question?.tags?.map((_tag) => {
                            return (
                                <div><span style={{backgroundColor:"blue", borderRadius:"5px", padding:"5px"}}>{_tag}</span></div>
                            )
                        })
                    }
                </div>
            </div>
            <div style={{ paddingLeft: "500px", width:"700px"}}>
                <div style={{ paddingBottom: "10px" }}>{new Date(question?.created_at).toLocaleString()}</div>
                <div className='d-flex' style={{ gap: "10px" }}>
                    <div><img className='user' src={user}></img></div>
                </div>
            </div>
            <hr style={{width:"700px"}}></hr>
            
        </div>
    );
};

export default Allquestions;