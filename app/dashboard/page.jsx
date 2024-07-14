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
  const router = useRouter();
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState(user);

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
        phoneNumber: currentUser.phoneNumber || "Not Available",
        whereMet,
        course,
        testimonial,
        createdAt: new Date(),
      });

      // Clear form
      setWhereMet("");
      setCourse("");
      setTestimonial("");
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
    <div className="p-3 md:mt-10 mx-auto h-screen font-sans">
      <div className="mt-[115px]">
        <div className="md:flex md:w-[90%] justify-between p-2 rounded-lg shadow-md">
          <h1 className="text-md md:text-3xl font-bold mb-4">
            Wellcome to the dashboard{" "}
            {user
              ? user.displayName
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")
              : "User"}
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col mx-3 gap-4 md:w-[50%] md:ml-10"
        >
          <label className="flex flex-col gap-1">
            Where did you meet Yared?
            <select
              value={whereMet}
              onChange={(e) => setWhereMet(e.target.value)}
              className="p-2 border text-black border-gray-300 rounded-md"
            >
              <option value="">Select...</option>
              <option value="class">Class</option>
              <option value="work">Work</option>
              <option value="college">College</option>
              <option value="teacher">Teacher</option>
              <option value="others">Others</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            Course attended:
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="p-2 text-black border border-gray-300 rounded-md"
            >
              <option value="">Select...</option>
              <option value="python">Python</option>
              <option value="webDev">Web Development</option>
              <option value="programmingKids">Programming for Kids</option>
              <option value="digitalMarketing">Digital Marketing</option>
              <option value="dataAnalysis">
                Data Analysis and Visualization
              </option>
              <option value="dataScience">Data Science</option>
              <option value="others">Others</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            Testimonial:
            <textarea
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
              placeholder="Enter your testimonial"
              required
              className="p-2 border border-gray-300 rounded-md"
            />
          </label>
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
