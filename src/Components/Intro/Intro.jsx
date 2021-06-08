import React, { useEffect, useRef  } from 'react';
import './Intro.scss'
import introImage from '../../images/habib-bg.png'
import { ArrowDownward } from '@material-ui/icons';
import { init } from 'ityped';

const Intro = () => {
    const textRef = useRef();
    useEffect(() => {
        console.log(textRef)
        init(textRef.current,
             { showCursor: true,
                startDelay: 1500,
                backSpeed:  70, strings: ["Developer", "Designer","Content Creator" ] })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img className="imgContainer" src={introImage} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Habibur Rahman</h1>
                    <h3>I am a <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <ArrowDownward className="arrow"></ArrowDownward>
                </a>
            </div>
        </div>
    );
};

export default Intro;