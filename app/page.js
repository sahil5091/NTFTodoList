import Image from "next/image";
import { db } from "./firebaseconfig";
import {  } from "./firebase/firestore"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>Todo List</h1>
    </main>
  );
}
