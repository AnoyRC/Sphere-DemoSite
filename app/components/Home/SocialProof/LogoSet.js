import Image from "next/image";

export default function LogoSet() {
  return (
    <div className="flex items-center justify-center gap-[54.57px]">
      <Image src="/images/SocialProof/Helius.svg" width={131.54} height={100} />
      <Image src="/images/SocialProof/Helium.svg" width={111.53} height={100} />
      <Image
        src="/images/SocialProof/Latitude.svg"
        width={137.9}
        height={100}
      />
      <Image
        src="/images/SocialProof/DeadKingSociety.svg"
        width={186.43}
        height={100}
      />
      <Image
        src="/images/SocialProof/UnderdogProtocol.svg"
        width={100}
        height={198.33}
      />
    </div>
  );
}
