import React,{useState} from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css"
import { TagsInput } from 'react-tag-input-component';
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {selectUser} from '../Features/userslice'
import axios from 'axios';
const Question = () => {
    const user=useSelector(selectUser)
    const[title,setTitle]=useState("")
    const[body,setBody]=useState("")
    const[tags,setTags]=useState([])
    const nav=useNavigate()
    const quill=(value)=>{
        setBody(value)
    }
   
    const submit = async (e) => {
        e.preventDefault();
        if (title !== "" && body !== "") {
            const bodyJSON = {
                "title": title,
                "body": body,
                "tags": tags,
                "user": user,
            };
            try {
                console.log(bodyJSON)
                const response = await axios.post("https://capstone-question-answer-backend.onrender.com/api/user/question", bodyJSON);
                console.log("Response",response)
                alert("Question raised");
                nav("/");
                
            } catch (error) {
                console.error("Error submitting question:", error);
            }
        }
    };
    return (
        <div>
            <div style={{ marginLeft: "400px", paddingTop: "30px" }}>
                <div><h3>Ask a public question</h3></div>
                <div style={{ border: "1px solid grey", width: "800px", padding: "10px", height: "470px" }}>
                    <div><h5>Title</h5></div>
                    <div><h6>Be specific and image you're asking question to another person</h6></div>
                    <div><input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Ask a question' style={{ width: "778px",padding:"10px", marginBottom:"20px"}} /></div>
                    <div><h5>Body</h5></div>
                    <div><h6>Include all the information someone would need to answer your question</h6></div>
                    <ReactQuill value={body} onChange={quill}  theme="snow" style={{height:"100px"}} />
                    <div style={{position:"relative",top:"60px"}}>
                    <div ><h5>Tags</h5></div>
                    <div><h6>Add upto 5 tags to know what your question describes about</h6></div>
                    <TagsInput value={tags}  onChange={setTags} name="tags"  placeHolder="Press enter to add a tag"/>      
                    <div style={{marginTop:"20px"}}><button type='submit' onClick={submit} className='bg-primary text-white' style={{border:"0px", borderRadius:"5px", padding:"10px"}}>Add your question</button></div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Question;