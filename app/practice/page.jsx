"use client";
import ParticleContainer from "@/components/ParticleContainer";
import { useState, useEffect } from "react";
import { app } from "@/app/lib/config";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Dashboard from "../dashboard/page";

const Exercise = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async () => {
        const auth = getAuth(app);
        if (
            "AIzaSyCW_vsFjt65qPYxKketNc4sNr3wkHlL4s4" ==
            process.env.NEXT_PUBLIC_APIKEY
        ) {
            console.log("Yared Kebede", process.env.NEXT_PUBLIC_APIKEY);
        }

        const provider = new GoogleAuthProvider();

        try {
            // Sign in user
            const result = await signInWithPopup(auth, provider);
            const signedInUser = result.user;

            // Update user state
            setUser(signedInUser);

            // Redirect to dashboard
            router.push("/dashboard");
        } catch (error) {
            console.log("Error signing in!", error.message);
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                {user ? (
                    <Dashboard user={user} />
                ) : (
                    <button
                        onClick={signInWithGoogle}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Sign in with Google
                    </button>
                )}
            </div>
        </div>
    );
};

export default Exercise;
