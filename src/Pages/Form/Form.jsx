import React, { useState } from 'react';
import { database } from "../../utils/firebase.js"; 
import { ref, push, set } from "firebase/database"; 
import "./Form.css";
import "../../global.css";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        location: "",
        qualification: "",
        institute: "",
        interests: "",
        hobbies: "",
        contact: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const formRef = ref(database, "formSubmissions");
        const newFormEntry = push(formRef); 

        set(newFormEntry, formData)
        .then(() => {
            alert("🎉 Success! Your details have been submitted. 🚀 \n\nYour journey towards a brighter future starts now. Our AI is here to guide you every step of the way! 🎯");
            
            setFormData({ // Clear form after submission
                name: "",
                age: "",
                gender: "",
                location: "",
                qualification: "",
                institute: "",
                interests: "",
                hobbies: "",
                contact: "",
                email: "",
            });
        })
        .catch((error) => {
            console.error("Error saving data:", error);
            alert("⚠️ Oops! Something went wrong. Please try again.");
        });
    
    };

    return (
        <>
            <div className="form-container">
                <h2>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Personal Information</legend>
                        <div className="form-group">
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="age">Age:</label>
                                <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
                            </div>
                        </div>

                        <label>Gender:</label>
                        <div className="checkbox-group">
                            <input type="radio" id="male" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} />
                            <label htmlFor="male">Male</label>

                            <input type="radio" id="female" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} />
                            <label htmlFor="female">Female</label>

                            <input type="radio" id="other" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleChange} />
                            <label htmlFor="other">Other</label>
                        </div>

                        <label htmlFor="location">Location:</label>
                        <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
                    </fieldset>

                    <fieldset>
                        <legend>Education</legend>
                        <div className="form-group">
                            <div>
                                <label htmlFor="qualification">Highest Qualification:</label>
                                <input type="text" id="qualification" name="qualification" value={formData.qualification} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="institute">Institution Name:</label>
                                <input type="text" id="institute" name="institute" value={formData.institute} onChange={handleChange} required />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Interests & Hobbies</legend>
                        <div className="form-group">
                            <div>
                                <label htmlFor="interests">Interests:</label>
                                <input type="text" id="interests" name="interests" value={formData.interests} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="hobbies">Hobbies:</label>
                                <input type="text" id="hobbies" name="hobbies" value={formData.hobbies} onChange={handleChange} />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Contact Information</legend>
                        <div className="form-group">
                            <div>
                                <label htmlFor="contact">Contact No:</label>
                                <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                        </div>
                    </fieldset>

                    <button type="submit" className="btn btn-primary form-btn">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Form;
