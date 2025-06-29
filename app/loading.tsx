import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <Image
        src="/whykerala.png"
        alt="loading"
        width={100}
        height={100}
        className="animate-pulse"
      />
    </div>
  );
}
