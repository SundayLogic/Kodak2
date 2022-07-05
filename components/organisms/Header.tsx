import Icon from "../atoms/Icon";
import HeaderIcon from "../molecules/HeaderIcon";
const Header = () => {
  return (
    <header className="sticky flex items-center justify-between px-4 pt-4 bg-green-900 md:justify-around">
      <Icon w={100} />
      <div className="flex items-center bg-green-700 space-x-4">
        <div className="flex items-center">
          <HeaderIcon iconName={"HOME"} title="Home" />
          <HeaderIcon iconName={"MOVIES"} title="Movies" />
          <HeaderIcon iconName={"SERIES"} title="Series" />
          <HeaderIcon iconName={"POPULAR"} title="Popular" />
          <HeaderIcon iconName={"WATCHLIST"} title="Watchlist" />
        </div>
      </div>
      <div className="bg-green-700">
        <h2>Header Right</h2>
      </div>
    </header>
  );
};
export default Header;
