export default function Heading() {
  return (
    <div className="flex flex-col items-center justify-center text-[#0F2A43] text-[80px] font-bold leading-[94px] tracking-[-3px] ">
      <h1>
        <span>All your</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#27D8FF] to-[#3B6EFF]">
          {" "}
          reccuring
        </span>
      </h1>
      <h1>payments in one place</h1>
    </div>
  );
}
