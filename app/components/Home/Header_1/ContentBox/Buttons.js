import ReadDocs from "./Buttons/ReadDocs";
import RequestEA from "./Buttons/RequestEA";
export default function Buttons() {
  return (
    <div className="flex gap-[32px] h-[40px]">
      <RequestEA />
      <ReadDocs />
    </div>
  );
}
