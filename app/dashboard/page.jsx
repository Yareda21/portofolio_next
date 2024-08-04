"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { app } from "@/app/lib/config";
import {
    getAuth,
    signOut as firebaseSignOut,
    onAuthStateChanged,
} from "firebase/auth";
import { db } from "@/app/lib/config";
import { addDoc, collection } from "firebase/firestore";

const Dashboard = ({ user }) => {
    const [whereMet, setWhereMet] = useState("");
    const [course, setCourse] = useState("");
    const [testimonial, setTestimonial] = useState("");
    const [rating, setRating] = useState("");
    const [phone, setPhone] = useState("");
    const [currentUser, setCurrentUser] = useState(user);

    const router = useRouter();
    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                router.push("/practice");
            }
        });
        return () => unsubscribe();
    }, [auth, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Function working");

            await addDoc(collection(db, "testimonials"), {
                userId: currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL || "Not Available",
                email: currentUser.email,
                phoneNumber,
                whereMet,
                course,
                testimonial,
                rating,
                createdAt: new Date(),
            });

            // Clear form
            setWhereMet("");
            setCourse("");
            setTestimonial("");
            setRating("");
            setPhone("");
            alert("Testimony Collected");
            router.push("/");
            return true;
        } catch (error) {
            console.log("Failed ", error);
            return false;
        }
    };

    const handleLogout = async () => {
        try {
            await firebaseSignOut(auth);
            router.push("/practice");
        } catch (error) {
            console.log("Error signing out", error.message);
        }
    };

    return (
        <div className="p-3 h-screen font-sans">
            <div className="mt-[110px]">
                <div className="md:flex w-[90%] justify-between p-2 rounded-lg shadow-md">
                    <h1 className="text-md md:text-3xl font-bold mb-4">
                        Wellcome to the dashboard <br />
                        {user ? user.displayName : ""}
                    </h1>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-700 text-sm text-white font-bold md:py-2 py-1 px-2  md:px-4 rounded"
                    >
                        Logout
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex md:flex-row mt-4 w-full md:justify-between text-sm md:text-base h-[290px] overflow-auto flex-col mx-3 md:gap-4 gap-1 md:w-[80%] md:ml-10"
                >
                    <div>
                        <label className="flex flex-col md:my-3 gap-1">
                            Where did you meet Yared?
                            <select
                                value={whereMet}
                                onChange={(e) => setWhereMet(e.target.value)}
                                className="p-2 border w-[400px]  text-black border-gray-300 rounded-md"
                            >
                                <option value="">Select...</option>
                                <option value="class">Class</option>
                                <option value="work">Work</option>
                                <option value="college">College</option>
                                <option value="teacher">Teacher</option>
                                <option value="others">Others</option>
                            </select>
                        </label>
                        <label className="flex flex-col md:my-3 gap-1">
                            Course attended:
                            <select
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                                className="p-2 w-[400px] text-black border border-gray-300 rounded-md"
                            >
                                <option value="">Select...</option>
                                <option value="python">Python</option>
                                <option value="webDev">Web Development</option>
                                <option value="programmingKids">
                                    Programming for Kids
                                </option>
                                <option value="digitalMarketing">
                                    Digital Marketing
                                </option>
                                <option value="dataAnalysis">
                                    Data Analysis and Visualization
                                </option>
                                <option value="dataScience">
                                    Data Science
                                </option>
                                <option value="dataScience">
                                    My Co-Worker
                                </option>

                                <option value="others">Others</option>
                            </select>
                        </label>
                        <label className="flex flex-col md:my-3 gap-1">
                            Testimonial:
                            <textarea
                                value={testimonial}
                                onChange={(e) => setTestimonial(e.target.value)}
                                placeholder="Enter your testimonial"
                                required
                                className="p-2 w-[400px] border border-gray-300 rounded-md"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col md:my-3 gap-1">
                            Overall Performance
                            <select
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                className="p-2 w-[400px] border text-black border-gray-300 rounded-md"
                            >
                                <option value="1">1 - Poor</option>
                                <option value="2">2 - Fair</option>
                                <option value="3">3 - Good</option>
                                <option value="4">4 - Very Good</option>
                                <option value="5">5 - Excellent</option>
                            </select>
                        </label>
                        <label className="flex flex-col md:my-3 gap-1">
                            Phone Number
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                placeholder="Enter Phone Number...."
                                className="p-2 w-[400px] border text-black border-gray-300 rounded-md"
                            />
                        </label>
                        <button
                            type="submit"
                            className="p-2 mt-4 w-[400px] bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;
