import React from 'react';
import './Testimonials.scss'

const Testimonials = () => {
    const data = [
        {id: 1, name:"Tom Durden",
        title: "Senior Developer", 
        img:"https://www.fantasticsams.com/sites/default/files/FS_Blog_-_20200423_-_4-LilacPixie.jpg",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque totam dolorem assumenda quaerat. Commodi, suscipit?"},
        {id: 2, name:"Tom cros",
        title: "Senior Developer", 
        img:"https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque totam dolorem assumenda quaerat. Commodi, suscipit?",featured: true},
        {id: 3, name:"Alex",title: "Senior Developer", img:"https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque totam dolorem assumenda quaerat. Commodi, suscipit?"}
    ]
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(p => (
                <div className={p.featured ?"card featured" :"card"}>
                    <div className="top">
                        <img className="left" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Curved_Arrow.svg/1200px-Curved_Arrow.svg.png"} alt="" />
                        <img className="user" src={p.img} alt="" />
                        <img className="right" src="https://lh3.googleusercontent.com/proxy/pKJV67E_mvAcb9id71bgQAAFnJweT8Hrvgenvn-BXY0dQ-luVFb39YHnrE2pKCRCzVxx67tKYwknWsAY-JIXjLBFvl9F8hEeMfJfZu7kEcj2zfHm0aogT4hP56m6uxT6YyNGk_cI6EDAGVsSRw" alt="" />
                    </div>
                    <div className="center">{p.desc}</div>
                    <div className="bottom">
                        <h3>{p.name}</h3>
                        <h4>{p.title}</h4>
                    </div>
                </div>
                ))}

            </div>
        </div>
    );
};

export default Testimonials;