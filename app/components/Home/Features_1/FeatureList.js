import Feature from "./FeatureList/Feature";

const titles = [
  "Seamless Off-ramping",
  "Multiparty Payments and Payouts",
  "A Unified Source of Truth",
  "Equipped For Accounting",
  "Add your team with Federated Roles",
  "Customer and Merchant Security",
];

export default function FeatureList() {
  return (
    <div className="w-[2688px] h-[530px] mt-[157px] flex gap-[32px] px-[112px]">
      {titles.map((title) => (
        <Feature key={title} title={title} />
      ))}
    </div>
  );
}
