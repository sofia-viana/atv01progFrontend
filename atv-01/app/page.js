import Image from "next/image";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center text-center bg-white dark:bg-black p-10 rounded-2xl shadow-md">
        <h1 className="text-2xl font-semibold">
          Olá Vó, tudo bem?
        </h1>
        <p className="mt-4 text-lg">
          Saudades ❤️
        </p>
      </main>
    </div>
  );
}
