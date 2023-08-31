import Image from "next/image";

export default function LaunchApp() {
  return (
    <div
      className="flex items-center justify-center text-white text-[14px] font-medium h-[40px] rounded-full px-[32px] py-[10px] hover:cursor-pointer gap-[8px]"
      style={{
        background:
          "linear-gradient(279.01deg, #3B6EFF 14.05%, #27D8FF 97.98%)",
      }}
    >
      <span>Launch App</span>
      <span>
        <Image
          src="/images/Navbar/arrow.svg"
          width={20}
          height={20}
          alt="arrow"
        />
      </span>
    </div>
  );
}
