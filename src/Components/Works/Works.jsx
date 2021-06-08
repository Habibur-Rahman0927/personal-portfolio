import React, { useState } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import './Work.scss'
const Works = () => {
    const [currentSlider, setCurrentSlider] = useState(0)
    const data = [
        { id: "1", icon: "https://www.transparentpng.com/thumb/mobile/mobile-cut-out-png-1.png", title: "Web design", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, dolorum ea aperiam vero alias vel, incidunt, quis reiciendis officiis adipisci inventore a aspernatur rem provident commodi", img: "https://daqiantimes.com/wp-content/uploads/2019/01/1d0900d02be609bbb740f68665465725df80e950-960x640.jpg" },
        { id: "2", icon: "https://www.transparentpng.com/thumb/mobile/mobile-cut-out-png-1.png", title: "Web development", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, dolorum ea aperiam vero alias vel, incidunt, quis reiciendis officiis adipisci inventore a aspernatur rem provident commodi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwE3Inbs7LCDuhz6rVStlyazJtRvGaE2W9Qg&usqp=CAU" },
        { id: "3", icon: "https://www.transparentpng.com/thumb/mobile/mobile-cut-out-png-1.png", title: "Dynamic website", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, dolorum ea aperiam vero alias vel, incidunt, quis reiciendis officiis adipisci inventore a aspernatur rem provident commodi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSnoItZk3TFWiw69CF_f5_hkv6w39f0Ekaw&usqp=CAU" }
    ]
    const handleClick = way =>{
        way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider-1: 2) :
        setCurrentSlider(currentSlider < data.length -1 ?currentSlider+1: 0)
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlider*100}vw)`}}>
                {data.map(d => (<div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftcontainer">
                                <div style={{ overflow: 'hidden' }} className="imgContainer">
                                    <img style={{ overflow: 'hidden' }} src={d.icon} alt="" />
                                </div>
                                <h2 style={{ overflow: 'hidden' }}>{d.title}</h2>
                                <p style={{ overflow: 'hidden' }}>{d.desc}</p>
                                <span style={{ overflow: 'hidden', display: 'inline-block' }}>Project</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>))}
            </div>
            <ArrowBackIos className="arrow left" onClick={() => handleClick("left")}></ArrowBackIos>
            <ArrowForwardIos className="arrow right" onClick={() => handleClick()}></ArrowForwardIos>
        </div>
    );
};

export default Works;