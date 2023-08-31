import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-1 text-[#0F2A43]">
      <Image
        src="/images/Logo/icon.svg"
        width={21.47}
        height={21.47}
        alt="logo-icon"
      />
      <Image
        src="/images/Logo/text.svg"
        width={71.13}
        height={21.1}
        alt="logo-text"
      />
    </div>
  );
}
