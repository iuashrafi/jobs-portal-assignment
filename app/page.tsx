import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-green-00">
      <h1 className="text-center mt-16 app-text-secondary">Continue As</h1>
      <div className="mt-10 flex bg-red-00 justify-center items-center gap-12">
        <Link href="/company/jobs">
          <div className="hover:scale-[1.025] transition-all cursor-pointer border app-border px-20 py-16 rounded-2xl">
            Company
          </div>
        </Link>
        <Link href="/candidate/jobs">
          <div className="hover:scale-[1.025] transition-all cursor-pointer border app-border px-20 py-16 rounded-2xl">
            Candidate
          </div>
        </Link>
      </div>
    </div>
  );
}
