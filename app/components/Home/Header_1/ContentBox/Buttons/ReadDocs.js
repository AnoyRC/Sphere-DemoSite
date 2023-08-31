import Image from "next/image";
export default function ReadDocs() {
  return (
    <div
      className="flex items-center justify-center text-[#2C61F9] text-[14px] font-medium h-[40px] rounded-full px-[16px] py-[10px] hover:cursor-pointer gap-[8px] border-[#2C61F9] border-[1px]"
      style={{
        background: "linear-gradient(279.01deg, #FFFFFF 100%, #FAFAFA 0%)",
      }}
    >
      <span>Read Docs</span>
      <span>
        <Image
          src="/images/Header_1/Buttons/ReadDocs.svg"
          width={20}
          height={20}
          alt="arrow"
        />
      </span>
    </div>
  );
}
