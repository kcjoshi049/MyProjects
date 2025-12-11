const TopHeading = ({ title1, title2 }) => {
  return (
    <div className="flex gap-5 flex-col justify-center items-center">
      <img src="https://api.dominos.co.in/prod-olo-api/contents/home-cms/aAkqT7DxtxYFTQfcAuPU9XM1e2zYY21KngQDeXBz.png" alt="img" className="w-50 "/>
      <div className="flex gap-2 text-3xl bg-linear-to-l from-yellow-900 via-yellow-600 to-yellow-300 bg-clip-text text-transparent font-semibold " style={{fontFamily:'"Alegreya", serif'}}>
        <span >{title1}</span>
        <span>{title2}</span>
      </div>
    </div>
  );
};

export default TopHeading;
