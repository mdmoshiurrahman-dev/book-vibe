import Image from "next/image";
import BannerImage from "@/assets/hero-image.png";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="grid grid-cols-2 gap-3 items-center bg-[#F5F5F5] p-10 lg:grid-cols-5 mx-5 mt-5 rounded-2xl">
      <div className="lg:p-5 lg:col-span-3">
        <h1 className="text-4xl font-bold">
          Books to freshen up <br /> your bookshelf
        </h1>
        <Link href="/all-book-list">
          <button className="cursor-pointer bg-[#23BE0A] px-4 py-3 rounded text-white font-bold mt-6">
            View The List
          </button>
        </Link>
      </div>
      <div className="lg:col-span-2">
        <Image src={BannerImage} height={300} loading="eager" alt="book" />
      </div>
    </div>
  );
};

export default Banner;
