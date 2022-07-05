import {
  HomeIcon,
  SearchIcon,
  FilmIcon,
  CollectionIcon,
  VideoCameraIcon,
  StarIcon,
  TrendingUpIcon,
} from "@heroicons/react/solid";
type Icons =
  | "HOME"
  | "SEARCH"
  | "MOVIES"
  | "SERIES"
  | "WATCHLIST"
  | "ORIGINALS"
  | "NEW"
  | "POPULAR";
interface IconText {
  title?: string;
  iconName?: Icons;
  size?: number;
}
const HeaderIcon = ({ title, iconName, size }: IconText) => {
  const iconCreator = (name: Icons) => {
    let finalCode;
    switch (name) {
      case "HOME":
        finalCode = <HomeIcon className="iconText" />;
        break;
      case "SEARCH":
        finalCode = <SearchIcon className="iconText" />;
        break;
      case "MOVIES":
        finalCode = <FilmIcon className="iconText" />;
        break;
      case "SERIES":
        finalCode = <VideoCameraIcon className="iconText" />;
        break;
      case "WATCHLIST":
        finalCode = <CollectionIcon className="iconText" />;
        break;
      case "ORIGINALS":
        finalCode = <StarIcon className="iconText" />;
        break;
      case "POPULAR":
        finalCode = <TrendingUpIcon className="iconText" />;
        break;
      default:
        finalCode = <h1>not found</h1>;
    }
    return finalCode;
  };
  return (
    <div className="flex flex-col items-center space-y-2 cursor-pointer py-3 group w-[100px]">
      <div className="opacity-90 group-hover:opacity-100 ease-out duration-150 transition-all">
        {iconCreator(iconName)}
      </div>
      <h1 className="uppercase z-1 opacity-90 group-hover:opacity-100 group-hover:tracking-wider transition-all">
        {title}
      </h1>
    </div>
  );
};
export default HeaderIcon;
