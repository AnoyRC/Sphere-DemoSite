export default function Feature({ title }) {
  return (
    <div className="h-[499px] w-[384px] rounded-[32px] border-b-[1px] border-[#E4EBFF] bg-[#F8FAFB] flex flex-col">
      <div className="bg-transparent py-[40px] px-[32px] w-full h-fit">
        <h1 className="text-[#0F2A43] text-[28px] leading-[40.96px]">
          {title}
        </h1>
      </div>
    </div>
  );
}
