import Image from "next/image";
export default function RequestEA() {
  return (
    <div
      className="flex items-center justify-center text-white text-[14px] font-medium h-[40px] rounded-full px-[16px] py-[10px] hover:cursor-pointer gap-[8px]"
      style={{
        background:
          "linear-gradient(279.01deg, #3B6EFF 14.05%, #27D8FF 97.98%)",
      }}
    >
      <span>Request Early Access</span>
      <span>
        <Image
          src="/images/Header_1/Buttons/RequestEA.svg"
          width={20}
          height={20}
          alt="arrow"
        />
      </span>
    </div>
  );
}
