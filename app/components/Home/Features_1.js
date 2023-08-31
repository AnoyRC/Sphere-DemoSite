import FeatureList from "./Features_1/FeatureList";
import Header from "./Features_1/Header";

export default function Features_1() {
  return (
    <div className="w-full h-[1246px] flex flex-col">
      <Header />
      <div className="w-full overflow-scroll">
        <FeatureList />
      </div>
    </div>
  );
}
