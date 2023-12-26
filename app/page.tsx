export default function Home() {
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
            <button className='py-4 px-10 w-full bg-white/10 hover:bg-white/50 rounded-md transition-all'>
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
