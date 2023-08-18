import LoginForm from '../loginForm/loginBrain.js';

export default function ProjectThree() {



    const loginGif = `${process.env.PUBLIC_URL}/Gifs/log-in-form.gif`;
    let login = `${process.env.PUBLIC_URL}/images/login.jpg`
    return (
        <div className="pt-5 pb-5">
            <div className="grid grid-cols-12 gap-4">

                <div className="col-span-12 
                                lg:col-start-1 lg:col-end-7
                                xl:col-start-4 xl:col-end-8">

                    <img style={{ width: "600px", height: "600px", borderRadius: "10%" }} src={login} alt="Shoes" />
                </div>


            
                <div className="col-span-12 
                                lg:col-start-8 lg:col-end-12
                                xl:col-start-9 xl:col-end-12 ml-10">
                    {/* "col-span-12 lg:col-span-4" */}
                    <h1 className=" text-3xl justify-center font-bold ">Login</h1>
                    <h2 className="text-2xl justify-center">/Sign up form</h2>
                    <p className="text-xl pt-10 ">
                    This is a log in/ register form. This is built on an on using React useState, onClick function,
                    and ternary operators to change from the log in form to the register form. This project I am 
                    working on adding authentication to make this into a full stack project.
                    </p>

                </div>
         


            </div>





            <div className="pl-5 card  shadow-xl  lg:px-20 mt-20 pb-20">
                <h2 className="mt-10 text-3xl font-bold">What it does</h2>
                <p className="mt-2 text-xl">
                    This renders two different pages depending on whether the 
                    user is a returning user, or if the user needs to register an account.
                    This is done clicking the button "Don't have an account?" or "Already have an account?", 
                    depending on which is shown. Below is a working example of this in action.
                </p>
                <h2 className="mt-10  text-3xl font-bold" >Challenge</h2>
                <p className="mt-2 text-xl">
                The challenge I am currently working on is hooking this project up to a database and using node.js
                    for the back end and implementing authentication.   
                </p>
                 
                <p className="mt-2 text-xl">
                    I have a live demo of this project, you can input text and switch between logging in and user sign up.
                </p>
    
            </div>
            <LoginForm />
        </div>
    );
}
