import CategorySlider from "../components/CategorySlider"
import CoverPage from "../components/CoverPage"
import TopHeading from "../components/TopHeading"
import Trending_food from "../components/Trending_food"


const Home = () => {
  return (
    <div className="w-[80vw] m-auto flex flex-col gap-10">
      <CoverPage />
      <CategorySlider />
      <TopHeading title1={"Trending"} title2={"Food"}/>
      <Trending_food />
    </div>
  )
}

export default Home
