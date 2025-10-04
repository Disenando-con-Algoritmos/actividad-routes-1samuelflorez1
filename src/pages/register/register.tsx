import type React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router";

function PageRegister() {
    const formRef = useRef(null);
    const nav = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const form = formRef.current; //esto es para dar a entender que la informacion existe
        if (form) {
            const formData = new FormData(form);
            localStorage.setItem("user", JSON.stringify(formData.get("username")));
            nav("/login");
        }
    };

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <form ref={formRef} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl" onSubmit={handleSubmit}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Username</label>
                                <input type="text" className="input" placeholder="Username" name="username" required />
                                {/* para guardar los datos se debe de colocar un "name"  a los que queremos extraer */}
                                <label className="label">Name</label>
                                <input type="text" className="input" placeholder="Name" name="name" required />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" required />
                                <button className="btn btn-neutral mt-4" type="submit">
                                    Login
                                </button>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PageRegister;
