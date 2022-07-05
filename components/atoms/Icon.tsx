import Image from "next/image";

interface IconProps {
  w: number;
  h?: number;
}
const Icon = ({ w, h }: IconProps) => {
  const url = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";
  return <Image src={url} width={w} height={h} />;
};
export default Icon;
