import React from 'react';
import world from '../images/world.png'
import star from '../images/star.png'
import bag from '../images/briefcase.png'
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className='d-flex font-weight-normal text-muted'>
            <div style={{ marginLeft: "150px" ,marginRight:"50px"}}>
                <div className='bottom' style={{ paddingTop: "30px" }}><button className='buttonn'>Home</button></div>
                <div className='bottom'><button className='buttonn'>PUBLIC</button></div>
                <div className='d-flex bottom'>
                    <div><img className='world' src={world}></img></div>
                    <div><button className='question buttonn'>Question</button></div>
                </div>
                <div className='bottom'><button className='tags buttonn'>Tags</button></div>
                <div className='bottom'><button className='tags buttonn'>Users</button></div>
                <div className='bottom'><button className='buttonn'>COLLECTIVES</button></div>
                <div className='d-flex bottom'>
                    <div><img className="star" src={star}></img></div>
                    <div><button className='explore buttonn'>Explore Collectives</button></div>
                </div >
                <div className='bottom'><button className='buttonn'>FIND A JOB</button></div>
                <div className='bottom'><button className='buttonn'>Question</button></div>
                <div className='bottom'><button className='buttonn'>TEAMS</button></div>
                <div className='d-flex bottom'>
                    <div><img className='bag' src={bag}></img></div>
                    <div><button className='companies buttonn'>Companies</button></div>
                </div>
            </div>
            <div>
                <div className='vl'></div>
            </div>
        </div>
    );
};

export default Sidebar;