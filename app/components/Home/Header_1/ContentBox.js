import AlphaNotifier from "./ContentBox/AlphaNotifier";
import Buttons from "./ContentBox/Buttons";
import Description from "./ContentBox/Description";
import Heading from "./ContentBox/Heading";

export default function ContentBox() {
  return (
    <div className="bg-transparent h-[380px] w-[85%] flex flex-col items-center justify-between gap-[16px]">
      <AlphaNotifier />
      <Heading />
      <Description />
      <Buttons />
    </div>
  );
}
