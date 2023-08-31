import Image from "next/image";
export default function FloatingIcon({ IconName, Width, Height, top, left }) {
  return (
    <Image
      src={`/images/Header_1/Icons/${IconName}.svg`}
      width={Width}
      height={Height}
      alt="arrow"
      className="absolute"
      style={{ top: `${top}px`, left: `${left * 100}%` }}
    />
  );
}
