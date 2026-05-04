import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
    const [formData, setFormData] = useState(
        {
            name:"", 
            email:"", 
            message:""
        },
    );
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("")
    // handles change on input field
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    };

    const showAlertMesssage = (type, message) => {
            setAlertType(type);
            setAlertMessage(message)
            setShowAlert(true);
            setTimeout(() => { 
            }, 5000);
    }
    // async functtion, handles the submit when send button is clicked and try catch for any error
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log("Form submitted:", formData);
            // could've put my keys in a .env file but since is not a production app I will leave it as is
            await emailjs.send("service_e2q6mu8", "template_xz51zxl", {
                from_name: formData.name,
                to_name: "Jeshua",
                from_email: formData.email,
                to_email: "ariasjeshua2@gmail.com",
                message: formData.message, 
            }, 
                "oYU2LaubNZOMFE2SD"
            );  
            setIsLoading(false);
            setFormData({name: "", email: "", message: ""});
            showAlertMesssage("Success", "Your message has been sent");
        } catch (error) {
            setIsLoading(false);
            console.log("EmailJS Error", error);
            showAlertMesssage("Error", "Something went wrong")      
        }
        
    };
    return (
            <section id="contact" className="relative flex items-center c-space section-spacing">
                <Particles 
                    className="absolute inset-0 -z-50"
                    quantity={100}
                    ease={80}
                    color={"#ffffff"}
                    refresh
                />
                {showAlert && <Alert type={alertType} text={alertMessage} />}
                <div className="flex flex-col items-center justify-center max-w-md 
                    p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
                    <div>
                        <h2 className="text-heading">Let's Talk</h2>
                        <p className="font-normal text-neutral-400">
                            Whether you're looking to build a new website,
                            improve your existing platform, or bring a unique project to life,
                            I'm here to help
                        </p>
                    </div>
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="name" className="feild-label">
                                Full Name
                            </label>
                            <input 
                                id="name"
                                name="name"
                                type="text"
                                className="field-input field-input-focus"
                                placeholder="John Doe"
                                autoComplete="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="feild-label">
                                Email
                            </label>
                            <input 
                                id="email"
                                name="email"
                                type="email"
                                className="field-input field-input-focus"
                                placeholder="johndoe@example.com"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="message" className="feild-label">
                                Message
                            </label>
                            <textarea 
                                id="message"
                                name="message"
                                type="text"
                                rows="4"
                                className="field-input field-input-focus"
                                placeholder="Share your thoughts..."
                                autoComplete="message"
                                value={formData.message}
                                onChange={handleChange} 
                                required
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full px-1 py-3 text-lg text-center
                            rounded-md cursor-pointer bg-radial from-lavender
                             to-royal hover-animation"
                        >
                            {!isLoading ? "Send" : "Sending..."}
                        </button>
                    </form>
                </div> 
            </section>
    );
}; 

export default Contact;