import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="">
      <div className="h-[90vh] w-full bg-[url('https://r4.wallpaperflare.com/wallpaper/417/748/887/geforce-gtx-titan-z-computer-gpus-wallpaper-9836cc3a2fec17097eb0e93252e9dbf0.jpg')] bg-cover bg-center bg-black/60 bg-blend-multiply">
        <div className="flex flex-col container h-full mx-auto py-10 text-center items-center justify-center">
          <h1 className="text-7xl font-extrabold text-[#fcf3ec]">
            Welcome To HOSEKI SHOP
          </h1>
          <p className="mt-4 text-xl text-[#fcf3ec]">
            Your one-stop shop for all things tech and gadgets!
          </p>
          <Link
            to={"/products"}
            className="mt-6 py-2 rounded-xl text-white bg-green-800 hover:bg-green-900 transition-colors duration-300 px-20 font-semibold border-1 border-white cursor-pointer"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
