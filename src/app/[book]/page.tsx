import ReadListButton from "@/components/readListAndWishListBtn/ReadListButton";
import WishListButton from "@/components/readListAndWishListBtn/WishListButton";
import { BookDataType } from "@/types/BookData";
import Image from "next/image";

export interface IAboutBookPageParams {
  params: Promise<{
    book: string;
  }>;
}
export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`);
  const data: BookDataType[] = await res.json();
  return data.map((book) => ({
    book: book.bookId.toString(),
  }));
 };
const AboutBookPage = async ({ params }: IAboutBookPageParams) => {
  const { book } = await params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}?bookId=${book}`);
  const data: BookDataType[] = await response.json();
  const bookData: BookDataType = data[0];
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-2 gap-4 p-10">
        <div className="flex justify-center items-center bg-gray-100 rounded-2xl">
          <Image
            src={bookData.image}
            height="450"
            width="300"
            alt={bookData.bookName}
          ></Image>
        </div>
        <div>
          <div className="border-b pb-3">
            <h2 className="font-bold text-2xl">{bookData.bookName}</h2>
            <p className="text-gray-600 text-[14px] font-semibold mt-1 border-gray-600">{`By: ${bookData.author}`}</p>
          </div>
          <p className="my-2">{bookData.category}</p>
          <div className="border-t border-gray-600 p-2">
            <p className="text-[14px]">
              <span className="font-bold text-[16px]">Review: </span>
              {bookData.review}
            </p>
          </div>
          <div className="flex gap-10 my-3">
            <p className="font-bold">Tag</p>
            <p className="px-3 py-1 text-[#23BE0A] bg-[#F4FCF3] rounded-2xl">{`#${bookData.tags[0]}`}</p>
            <p className="px-3 py-1 text-[#23BE0A] bg-[#F4FCF3] rounded-2xl">{`#${bookData.tags[1]}`}</p>
          </div>
          <div className="flex gap-15 border-t border-gray-700 py-5">
            <div className="text-gray-600 text-[14px]">
              <p>Number of Pages:</p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Rating:</p>
            </div>
            <div className="font-bold text-[14px]">
              <p>{bookData.totalPages}</p>
              <p>{bookData.publisher}</p>
              <p>{bookData.yearOfPublishing}</p>
              <p>{bookData.rating}</p>
            </div>
          </div>
          <div className="flex gap-5">
            <ReadListButton book={bookData} />
         <WishListButton book ={bookData}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBookPage;
