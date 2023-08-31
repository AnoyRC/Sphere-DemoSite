import BackerList_1 from "./BackerSection/BackerList_1";
import BackerList_2 from "./BackerSection/BackerList_2";
import BackerList_3 from "./BackerSection/BackerList_3";
import BackerList_4 from "./BackerSection/BackerList_4";

export default function BackerSection() {
  return (
    <div className="w-full h-[698px] flex justify-center">
      <div className="w-[85%] h-full flex flex-col items-center justify-center gap-[5px]">
        <h1 className="text-[16px] text-[#0F2A43]">
          Backed By The Industry's Best:
        </h1>
        <div className="w-full h-full flex flex-col items-center justify-center gap-[2px]">
          <BackerList_1 />
          <BackerList_2 />
          <BackerList_3 />
          <BackerList_4 />
        </div>
      </div>
    </div>
  );
}
