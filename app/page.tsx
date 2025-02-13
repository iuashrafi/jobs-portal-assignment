import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-green-00">
      <h1 className="text-center mt-16 app-text-secondary">Continue As</h1>
      <div className="mt-10 flex flex-wrap bg-red-00 justify-center items-center gap-12">
        <Card label="Company" href="/company/jobs" />
        <Card label="Candidate" href="/candidate/jobs" />
      </div>
    </div>
  );
}

const Card = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link href={href}>
      <div className="hover:scale-[1.025] card-shadow transition-all cursor-pointer border app-border px-20 py-16 rounded-2xl">
        {label}
      </div>
    </Link>
  );
};
