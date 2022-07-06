import BrandsHover from "../organisms/BrandsHover";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import MoviesContent from "../organisms/MoviesContent";
import SeriesContent from "../organisms/SeriesContent";
import SlideBanner from "../organisms/SlideBanner";

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <SlideBanner />
      <BrandsHover />
      <MoviesContent />
      <SeriesContent />
      <Footer />
    </>
  );
};
export default HomeTemplate;
