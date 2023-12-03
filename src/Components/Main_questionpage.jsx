import React from 'react';
import './Main_questionpage.css'
import sort from '../images/sort.png'

import { useNavigate } from 'react-router-dom';
import Allquestions from './Allquestions';
const Main_questionpage = ({ question }) => {
    const nav = useNavigate()
    return (
        <div style={{ paddingLeft: "380px", position: "relative", top: "-680px", height: "0px" }}>
            <div className='d-flex' style={{ paddingBottom: "10px" }}>
                <div><h4>All Questions</h4></div>
                <div style={{ paddingLeft: "750px" }}><button style={{padding:"10px"}} className='ask_question' onClick={() => nav("/question")}>Ask Question</button></div>
            </div>
            <div className='d-flex'>
                <div><h5>{question && question.length} Questions</h5></div>
                <div style={{ paddingLeft: "630px" }}><button className='new'>Newest</button><button className='active'>Active</button><button className='more'>More</button></div>
                <div className='d-flex' style={{ paddingLeft: "20px" }}>
                    <div><img style={{ position: "absolute", top: '60px', left: "1318px" }} className='sort' src={sort}></img></div>
                    <div><button style={{ paddingLeft: "25px", borderRadius: "5px" }}>Filter</button></div>
                </div>
            </div>
            {question?.map((_q,index) => (
                <div key={index}>
                    <Allquestions question={_q} />
                </div>
            ))}
            {/* <div className='d-flex' style={{paddingTop:"25px", gap:"20px"}}>
                <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                    <div style={{padding:"2px"}}>0</div>
                    <div style={{padding:"2px"}}>Votes</div>
                    <div style={{padding:"2px"}}>0</div>
                    <div style={{padding:"2px"}}>Answers</div>
                    <div style={{padding:"2px"}}>0 Views</div>
                </div>
                <div>
                    <div className='text-primary' style={{paddingBottom:"5px"}} onClick={()=>nav("/viewquestion")}><button className='text-primary' style={{backgroundColor:"white", border:"0px", paddingLeft:"1px"}}>How to use drag and drop in ant design ?</button></div>
                    <div style={{paddingBottom:"15px", width:"900px"}}>Ant Design is a popular React UI library that provides a set of high-quality components for building user interfaces. To implement drag-and-drop functionality in Ant Design, you can use the rc-drawer library, which is a separate library that integrates well with Ant Design.</div>
                    <div className='d-flex' style={{gap:"15px"}}>
                        <div><button className='hashtag'>react</button></div>
                        <div><button className='hashtag'>antd</button></div>
                        <div><button className='hashtag'>frontend</button></div>
                    </div>
                </div>
            </div> */}
            {/* <div style={{paddingLeft:"870px"}}>
                <div style={{paddingBottom:"10px"}}>Timestamp</div>
                <div className='d-flex' style={{gap:"10px"}}>
                    <div><img className='user' src={user}></img></div>
                    <div style={{paddingTop:'9px'}}>User name</div>
                </div>
            </div> */}
            {/* <hr></hr> */}
            {/* <div className='d-flex' style={{paddingTop:"25px", gap:"20px"}}>
                <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                    <div style={{padding:"2px"}}>0</div>
                    <div style={{padding:"2px"}}>Votes</div>
                    <div style={{padding:"2px"}}>0</div>
                    <div style={{padding:"2px"}}>Answers</div>
                    <div style={{padding:"2px"}}>0 Views</div>
                </div>
                <div>
                <div style={{paddingBottom:"5px"}} onClick={()=>nav("/viewquestion")}><button className='text-primary' style={{backgroundColor:"white", border:"0px", paddingLeft:"1px"}}>How to use drag and drop in ant design ?</button></div>
                    <div style={{paddingBottom:"15px", width:"900px"}}>Ant Design is a popular React UI library that provides a set of high-quality components for building user interfaces. To implement drag-and-drop functionality in Ant Design, you can use the rc-drawer library, which is a separate library that integrates well with Ant Design.</div>
                    <div className='d-flex' style={{gap:"15px"}}>
                        <div><button className='hashtag'>react</button></div>
                        <div><button className='hashtag'>antd</button></div>
                        <div><button className='hashtag'>frontend</button></div>
                    </div>
                </div>
            </div> */}
            {/* <div style={{paddingLeft:"870px"}}>
                <div style={{paddingBottom:"10px"}}>Timestamp</div>
                <div className='d-flex' style={{gap:"10px"}}>
                    <div><img className='user' src={user}></img></div>
                    <div style={{paddingTop:'9px'}}>User name</div>
                </div>
            </div>
            <hr></hr> */}

        </div>
    );
};

export default Main_questionpage;