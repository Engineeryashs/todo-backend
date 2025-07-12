import { useState } from "react";
const LoginSignup = () => {
    const [isLoginMode, setIsLoginMode] = useState(false);

    return (
        <div className="w-[430px] bg-white rounded-xl shadow-xl shadow-cyan-500/50 p-8">
            <div className="flex justify-center mb-20">
                <h2 className="text-3xl font-semibold text-center">{isLoginMode ? "Login" : "Signup"}</h2>
            </div>
            
            
            <div className="h-12 mb-20 relative flex border border-gray-300 rounded-full">
                <button onClick={() => { setIsLoginMode(false) }} className={`w-1/2 cursor-pointer text-lg font-medium transition-all z-10 ${isLoginMode ? "text-black" : "text-white"}`}>Signup</button>
                <button onClick={() => { setIsLoginMode(true) }} className={`w-1/2 cursor-pointer text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}>Signin</button>
                <div className={`absolute top-0 w-1/2 h-full rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 transition-all ${isLoginMode ? "left-1/2" : "left-0"}`}></div>
            </div>

            {/*Form Section*/}
            <form>
                {/*These is for Signup page*/}
                {!isLoginMode && (<input type="text" placeholder="name" required className="w-full p-3 border-b-2 border-gray-300 focus:border-cyan-500 placeholder-gray-400 outline-none" />)}
                {/*Shared input field email id and password*/}
                     {!isLoginMode && (<input type="text" placeholder="last name" required className="w-full p-3 border-b-2 border-gray-300 focus:border-cyan-500 placeholder-gray-400 outline-none" />)}
                {/*Shared input field email id and password*/}
                <input type="email" name="email" placeholder="Email address" required className="w-full p-3 border-b-2 border-gray-300 focus:border-cyan-500 placeholder-gray-400 outline-none" />
                <input type="password" placeholder="Password" required className="w-full p-3 border-b-2 border-gray-300 focus:border-cyan-500 placeholder-gray-400 outline-none" />


                {!isLoginMode && (<input type="password" placeholder="Confirm Password" required className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400" />)}
                {/*Here while using conditional rendering we can't write if() because its statement and in JSX we can write expresssion only in curled brackets this is for signup page*/}

                {isLoginMode && (<div className="text-right"><p className="text-cyan-600 hover:underline">Forget Password</p></div>)}

                {/*Shared login signup button*/}
                <button className="w-full mt-6 p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 cursor-pointer transition-all">{isLoginMode ? "Login" : "Signup"}</button>

                {/*Switch Link*/}
                <p className="mt-6 text-center text-gray-600">{isLoginMode ? "Don't have an account " : "Already have an account "}
                    <a className="text-cyan-400 hover:underline" href="#" onClick={(e) => { setIsLoginMode(!isLoginMode) }}>{isLoginMode ? "Signup" : "Login"}</a>
                </p>
            </form>
        </div>



    )
}
export default LoginSignup;
