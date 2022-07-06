import Image from "next/image";

interface IconProps {
  w: number;
  h: number;
}
const Icon = ({ w, h }: IconProps) => {
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";
  return (
    <div className="hidden sm:flex p-1 cursor-pointer opacity-90 hover:opacity-100 transition-all duration-200 ease-out min-w-[80px]">
      <Image
        src={url}
        width={w}
        height={h}
      />
    </div>
  );
};
export default Icon;
