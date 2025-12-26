import CategorySlider from "../components/CategorySlider";
import CoverPage from "../components/CoverPage";
import TopHeading from "../components/TopHeading";
import Trending_food from "../components/Trending_food";

const Home = () => {
  return (
    <div
      className=" m-auto flex flex-col gap-10 w-[90vw]"
    >
      <div style={{ background: `url(https://btthemesele.wpengine.com/kudil-elementor/wp-content/uploads/sites/5/2025/03/slider3.jpg)`}} className="mt-10">
      <CoverPage />
      </div>
      <div className="flex flex-col gap-10">
      <CategorySlider />
      <TopHeading title1={"Trending"} title2={"Food"} />
      <Trending_food />
      </div>
    </div>
  );
};

export default Home;
