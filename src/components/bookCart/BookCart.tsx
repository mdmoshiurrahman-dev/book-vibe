import { BookDataType } from "@/types/BookData";
import Image from "next/image";
import Link from "next/link";

export interface BookCartProps {
  book: BookDataType;
}

const BookCart = ({ book }: BookCartProps) => {
  return (
  <Link href={`/${book.bookId}`}>
      <div className="border border-gray-400 flex flex-col justify-between rounded-2xl p-4 cursor-pointer  transition-all duration-300 ease-out  hover:shadow-lg hover:shadow-gray-600/20 hover:-translate-y-0.5 active:translate-y-0">
      <div className="flex justify-center items-center p-8 bg-gray-100 w-full rounded-2xl overflow-hidden h-56">
        <Image src={book.image} height={150} width={80} alt={book.bookName} />
      </div>
      <div className="flex mt-3">
        <p className="px-3 py-1 text-[#23BE0A] bg-[#F4FCF3] rounded-2xl mr-3">
          {book.tags[0]}
        </p>
        <p className="px-3 py-1 text-[#23BE0A] bg-[#F4FCF3] rounded-2xl mr-3">
          {book.tags[1]}
        </p>
      </div>
      <div>
            <h2 className="text-xl my-2 font-semibold">{book.bookName}</h2>
        <p className="text-[14px] text-gray-600">{`By: ${book.author}`}</p>
      </div>
      <div className="flex justify-between text-[14px] border-t border-gray-400 mt-3 pt-3">
        <p>{book.category}</p>
        <p>{book.rating} ★</p>
      </div>
    </div>
  </Link>
  );
};

export default BookCart;
