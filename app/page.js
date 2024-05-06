import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">TaskTrove</h1>
      <Link href="/client" className="btn btn-accent">start</Link>
    </div>
  );
};

export default HomePage;
