"use client";
import TestimonyCards from "@/components/TestimonyCards";
import Link from "next/link";
import { db } from "../lib/config";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

// gettind data from firestore
async function getDataFromFirestore() {
    const querySnapShoot = await getDocs(collection(db, "testimonials"));
    const data = [];
    querySnapShoot.forEach((file) => {
        data.push({ id: file.id, ...file.data() });
    });

    return data;
}

export default function Testimony() {
    const [testimonyData, setTestimonyData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const getingData = await getDataFromFirestore();
            setTestimonyData(getingData);
        }

        fetchData();
    }, []);

    return (
        <section class="py-24 px-2 md:px-10 flex items-center ">
            <div class="container mx-auto px-4">
                <div class="flex flex-col lg:flex-row items-center justify-between">
                    <div class="mb-8 lg:mb-0 lg:w-1/2 mr-5">
                        <h2 class="text-xl md:text-3xl font-semibold mt-3 mb-2">
                            Welcome to my{" "}
                            <span class="text-blue-200 underline underline-offset-4">
                                Testimonials
                            </span>{" "}
                        </h2>
                        <p class="hidden md:flex font-light text-gray-50">
                            Here, you'll find the voices of those I've had the
                            pleasure of working with and teaching. From coding
                            to digital marketing, my journey has been enriched
                            by the diverse experiences and feedback from my
                            students and colleagues.!
                        </p>
                        <button className="bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <Link href="/practice">Give a testimoney</Link>
                        </button>
                    </div>

                    <TestimonyCards />
                </div>
            </div>
        </section>
    );
}
