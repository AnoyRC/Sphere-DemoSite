import Image from "next/image";

export default function Carousel() {
  return (
    <div className="w-full h-[667px] bg-transparent flex items-end justify-center border-b-[1px] border-[#E4EBFF]">
      <div
        className="w-[85%] h-[594px] rounded-[20px] bg-[#F5F7F9] items-center justify-center flex"
        style={{
          boxShadow: "0px 30.16247px 39.03379px 0px rgba(0, 0, 0, 0.10)",
        }}
      >
        <Image src="/images/Carousel/Carousel.png" width={300} height={300} />
      </div>
    </div>
  );
}
