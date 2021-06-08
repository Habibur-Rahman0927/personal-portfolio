import React, { useState } from 'react';
import './Contact.scss'
const Contact = () => {
    const [message, setMessage] = useState(false)
    const handleSubmite= (e) =>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://www.nicepng.com/png/detail/243-2439249_hand-shake-svg-png-icon-free-download-hand.png" alt="" />
            </div>
            <div className="right" onSubmit={handleSubmite}>
                <h2>Contact</h2>
                <form action="">
                    <input type="text" placeholder="Email" />
                    <textarea name="" id="" cols="3" rows="13" placeholder="Message"></textarea>
                    <button type="submite">Send</button>
                    {message && <span>Thanks I will reply</span>}
                </form>
            </div>
        </div>
    );
};

export default Contact;