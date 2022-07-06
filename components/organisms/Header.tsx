import Icon from "../atoms/Icon";
import HeaderIcon from "../molecules/HeaderIcon";
import UserIcon from "../molecules/UserIcon";
const Header = () => {
  return (
    <header className="sticky flex items-center justify-center px-4 bg-green-900 md:justify-around">
      <div className="flex items-center bg-green-700 md:space-x-10">
        <Icon w={100} h={100} />
        <div className="flex items-center justify-between space-x-3 md:space-x-5">
          <HeaderIcon iconName={"POPULAR"} title="Popular" />
          <HeaderIcon iconName={"HOME"} title="Home" />
          <HeaderIcon iconName={"MOVIES"} title="Movies" />
          <HeaderIcon iconName={"SERIES"} title="Series" />
          <HeaderIcon iconName={"WATCHLIST"} title="Watchlist" />
        </div>
      </div>
      <div className="hidden bg-green-700 sm:flex">
        <UserIcon w={45} h={45}/>
      </div>
    </header>
  );
};
export default Header;
