import Image from "next/image";
import { db } from "./firebaseConfig.js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="list text-white" >Todo List</h1>
    </main>
  );
}
