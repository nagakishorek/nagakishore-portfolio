export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-6xl font-bold text-blue-500">
        NAGA KISHORE
      </h1>

      <h2 className="text-2xl mt-6 text-gray-300">
        DevOps Engineer
      </h2>

      <p className="mt-4 text-lg text-gray-400 text-center max-w-2xl">
        Cloud • AWS • Docker • Kubernetes • Terraform • CI/CD • Linux • Automation
      </p>

      <div className="mt-10 flex gap-5">

        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">
          View Projects
        </button>

        <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-xl">
          Download Resume
        </button>

      </div>

    </main>
  );
}