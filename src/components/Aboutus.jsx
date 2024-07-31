import React from 'react';
import "./aboutus.css";

export const Aboutus = () => {
    const userData = [
      
        {
            name: "Varsha",
            city: "Chennai",
            desig: "Front-end Development",
            skills: ["UI", "UX", "HTML", "JS", "Java", "Python", "React", "Node"],
            online: true,
            profile: "2.jpg",
        },
        {
            name: "Ashwin",
            city: "Vellore",
            desig: "Front-end Development",
            skills: ["UI", "UX", "HTML", "JS", "Java", "Python", "React", "Node"],
            online: false,
            profile: "3.jpg"
        }
    ];

    return (
        <>
         <h1>About Us</h1>
        
        <div className="root">
           
            {userData.map((user, index) => (
                <User
                    key={index}
                    name={user.name}
                    city={user.city}
                    desid={user.desig}
                    skills={user.skills}
                    online={user.online}
                    profile={user.profile}
                />
            ))}
        </div>
        </>
    );
};

function User(props) {
    return (
        <div className="containerr">
            <span className={props.online ? "statuss online" : "statuss offline"}>
                {props.online ? "ONLINE" : "OFFLINE"}
            </span>
            <img className="profile-img" src={props.profile} alt="" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.desig}</p>
            <div className="buttons">
                <button className="b1">Message</button>
                <button className="b2">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
