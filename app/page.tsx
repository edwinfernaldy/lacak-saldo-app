"use client";

import { useRouter } from "../node_modules/next/navigation";
import Button from "./components/Button";

export default function Home() {
  const router = useRouter();

  const logIn = () => {
    console.log("hey");
    router.push("/dashboard");
  };

  return (
    <main className='flex h-screen items-center overflow-hidden justify-between'>
      <div className='basis-1/2'></div>

      <div className='bg-blue-400 shadow-lg border-blue-800 h-full flex flex-col gap-8 justify-center basis-1/2 p-24'>
        <h1 className='font-bold text-6xl tracking-tighter text-white'>
          Login
        </h1>

        <div>
          <form className='flex flex-col gap-3'>
            <input
              placeholder='Username'
              className='p-3 rounded-md bg-white/80'
            />

            <input
              placeholder='Password'
              className='p-3 rounded-md bg-white/80'
            />

            <Button onClick={() => logIn()}>Login</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
