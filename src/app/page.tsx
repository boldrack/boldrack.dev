import Image from "next/image";

export default function Home() {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span className="absolute left-4 top-4">@boldrack</span>
      <main className="flex items-center gap-2 row-start-2 items-center ">
        <div className=" p-1 px-2 bg-slate-700">NORMAL</div>
        <span><span className="text-green-500 mr-1">:</span><span className="text-slate-100 mr-2">recording</span><span className="text-red-400">@q</span></span>
      </main>
    </div>
  );
}
