import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-green-00">
      <h1 className="text-center mt-16">Continue As</h1>
      <div className="mt-10 flex bg-red-00 justify-center items-center gap-12">
        <Link href="/company/jobs">
          <div className="hover:scale-[1.025] transition-all cursor-pointer border border-[#E2E8F0] px-20 py-16 rounded-lg">
            Company
          </div>
        </Link>
        <Link href="/candidate/jobs">
          <div className="hover:scale-[1.025] transition-all cursor-pointer border border-[#E2E8F0] px-20 py-16 rounded-lg">
            Candidate
          </div>
        </Link>
      </div>
    </div>
  );
}
