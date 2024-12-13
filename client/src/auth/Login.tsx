import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

type LoginInputState = {
    email:string;
    password:string;
}

const Login = () => {

    const [input, setInput] = useState<LoginInputState>({
        email:"",
        password:"",
    });

    const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInput({...input, [name]:value});
    }

    const loginSubmitHandler = (e:FormEvent) => {
        e.preventDefault();
        console.log(input);
    }

    const loading = false;
    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">DeliDash</h1>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <Input type="email" placeholder="Email" name="email" value={input.email} onChange={changeEventHandler} className="pl-10 focus-visible:ring-1" />
                        <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                    </div>
                </div>

                <div className="mb-4">
                    <div className="relative">
                        <Input type="password" placeholder="Password" name="password" value={input.password} onChange={changeEventHandler} className="pl-10 focus-visible:ring-1" />
                        <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                    </div>
                </div>

                <div className="mb-10">
                    {
                        loading ? <Button disabled className="w-full bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait</Button> : (
                            <Button type="submit" className="w-full bg-orange hover:bg-hoverOrange">Login</Button>
                        )
                    } 
                </div>
                <Separator/>
                <p className="mt-2">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-500">Signup</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;