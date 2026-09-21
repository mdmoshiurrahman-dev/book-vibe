import { BookDataType } from "@/types/BookData";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn, CiUser } from "react-icons/ci";
import { RiPagesLine } from "react-icons/ri";

export interface AddedListProps {
    book: BookDataType;
}

const AddedList = ({ book }: AddedListProps) => {
    return (
        <div className="flex gap-5 border border-gray-400 p-3 rounded-xl">
            <div className="flex justify-center items-center bg-gray-100 p-5 rounded-xl">
                <Image src={book.image} height="180" width="100" alt={book.bookName} />
            </div>
            <div className="w-full">
                <div>
                    <h2 className="font-bold text-xl">{book.bookName}</h2>
                    <p className="font-semibold text-[14px] text-gray-600 my-2">{`By : ${book.author}`}</p>
                </div>
                <div className="flex gap-5 text-[14px] mt-2">
                    <p className="font-semibold text-[16px]">Tag</p>
                    <p className="px-3 py-1 text-[#23BE0A] bg-[#F4FCF3] rounded-2xl">{`#${book.tags[0]}`}</p>
                    <p className="px-3 py-1 text-[#23BE0A] bg-[#F4FCF3] rounded-2xl">{`#${book.tags[1]}`}</p>
                    <p>{`Year of Publishing: ${book.yearOfPublishing}`}</p>
                </div>
                <div className="text-gray-600 text-[14px] flex gap-4 border-b border-gray-400 py-3">
                    <p>{`Publisher: ${book.publisher}`}</p>
                    <p>{`Page ${book.totalPages}`}</p>
                </div>
                <div className="flex gap-5 pt-3 text-[14px]">
                    <p className="bg-[#E0EEFF] text-[#6dadfa] px-3 py-1.5 rounded-2xl font-semibold">{`Category: ${book.category}`}</p>
                    <p className="bg-[#FFF3E0] text-[#fcc572] px-3 py-1.5 rounded-2xl font-semibold">{`Rating: ${book.rating}`}</p>
                    <Link href={`http://localhost:3000/${book.bookId}`}>
                        <button className="cursor-pointer bg-[#23BE0A] text-white font-semibold px-3 py-1.5 rounded-2xl">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddedList;
