import ContentBox from "./Header_1/ContentBox";
import FloatingIcon from "./Header_1/ContentBox/FloatingIcon";
import { IconData } from "./Header_1/IconData";

export default function Header_1() {
  return (
    <div className="w-full h-[572px] flex items-center justify-center">
      <ContentBox />
      {IconData.map((icon) => (
        <FloatingIcon
          IconName={icon.IconName}
          Width={icon.Width}
          Height={icon.Height}
          top={icon.top}
          left={icon.left}
          key={icon.IconName}
        />
      ))}
    </div>
  );
}
