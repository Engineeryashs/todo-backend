import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginSignup = () => {
    const [isLoginMode, setIsLoginMode] = useState(false);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    let navigate=useNavigate();
    return (
        <div className="w-[430px] bg-white rounded-xl shadow-xl shadow-gray-500/50 p-8">
            <div className="flex justify-center mb-20">
                <h2 className="text-3xl font-semibold text-center">{isLoginMode ? "Login" : "Signup"}</h2>
            </div>
            <div className="h-12 mb-20 relative flex border border-gray-300 rounded-full">
                <button type="button" onClick={() => { setIsLoginMode(false) }} className={`w-1/2 cursor-pointer text-lg font-medium transition-all z-10 ${isLoginMode ? "text-black" : "text-white"}`}>Signup</button>
                <button type="button" onClick={() => { setIsLoginMode(true) }} className={`w-1/2 cursor-pointer text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}>Signin</button>
                <div className={`absolute top-0 w-1/2 h-full rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 transition-all ${isLoginMode ? "left-1/2" : "left-0"}`}></div>
            </div>

            {/*Form Section*/}
            <form>
                {/*These is for Signup page*/}
                {!isLoginMode && (<input type="text" placeholder="name" required className="w-full p-3 border-b-2 border-gray-300 focus:border-cyan-500 placeholder-gray-400 outline-none" value={name} onChange={(e) => { setName(e.target.value) }} />)}
                {/*Shared input field email id and password*/}
                {!isLoginMode && (<input type="text" placeholder="last name" required className="w-full p-3 border-b-2 border-gray-300 focus:border-cyan-500 placeholder-gray-400 outline-none" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />)}
                {/*Shared input field email id and password*/}
                <input type="email" name="email" placeholder="Email address" required className="w-full p-3 border-b-2 border-gray-300 focus:border-cyan-500 placeholder-gray-400 outline-none" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder="Password" required className="w-full p-3 border-b-2 border-gray-300 focus:border-cyan-500 placeholder-gray-400 outline-none" value={password} onChange={(e) => { setPassword(e.target.value) }} />


                {!isLoginMode && (<input type="password" placeholder="Confirm Password" required className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />)}
                {/*Here while using conditional rendering we can't write if() because its statement and in JSX we can write expresssion only in curled brackets this is for signup page*/}

                {isLoginMode && (<div className="text-right"><p className="text-cyan-600 hover:underline">Forget Password</p></div>)}

                {/*Shared login signup button*/}
                <button className="w-full mt-6 p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 cursor-pointer transition-all" onClick={async (e) => {
                    e.preventDefault();
                    if(!isLoginMode&& (!name||!lastName||!password||!confirmPassword))
                    {
                        console.log("please fill inputs")
                        return;
                    }
                    if (!isLoginMode && password !== confirmPassword) {
                        alert("Passwords do not match");
                        return;
                    }
                    if (isLoginMode) {
                        try {
                            let response = await axios.post("http://localhost:3000/api/vi/user/signin", {
                            email,
                            password
                        }
                    )
                        console.log(response.data);
                         localStorage.setItem("token",response.data.token);
                          navigate("/protectedRoute/dashboard");
                        } catch (error) {
                            console.log(error);
                        }
                    
                    }
                    else {
                        try {
                            let response = await axios.post("http://localhost:3000/api/vi/user/signup", {
                            name,
                            lastName,
                            email,
                            password
                        })
                        console.log(response.data)
                           localStorage.setItem("token",response.data.token);
                        navigate("/protectedRoute/dashboard");
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }}>{isLoginMode ? "Login" : "Signup"}</button>

                {/*Switch Link*/}
                <p className="mt-6 text-center text-gray-600">{isLoginMode ? "Don't have an account " : "Already have an account "}
                    <a className="text-cyan-400 hover:underline" href="#" onClick={() => { setIsLoginMode(!isLoginMode) }}>{isLoginMode ? "Signup" : "Login"}</a>
                </p>
            </form>
        </div>



    )
}
export default LoginSignup;
