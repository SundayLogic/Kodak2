import Link from "next/link";
import Image from "next/image";
interface UserIconProps {
  w: number;
  h: number;
}
const UserIcon = ({ w, h }: UserIconProps) => {
  const url =
    "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg";
  return (
    <div className="p-4 cursor-pointer hover:saturate-150 opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-150 ease-in-out">
      <Link href="/login">
        <img src={url} alt="user-icon" width={w} height={h} />
      </Link>
    </div>
  );
};
export default UserIcon;
