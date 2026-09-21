"use client";
import { bookDataContext } from "@/context/BookDataProvide";
import { BookDataType } from "@/types/BookData";
import { useContext } from "react";

export interface ReadListButtonProps {
  book: BookDataType;
}
export interface BookStateType {
  readList: BookDataType[];
  setReadList: (book: BookDataType[]) => void;
}

const ReadListButton = ({ book }: ReadListButtonProps) => {
  const bookState = useContext(bookDataContext) as BookStateType;
  const { readList, setReadList } = bookState;

  const handleReadList = (book: BookDataType): void => {
    setReadList([...readList, book]);
    console.log(book);
  };
  return (
    <>
      <button
        onClick={() => handleReadList(book)}
        className="bg-white border px-5 py-2 font-semibold cursor-pointer text-[14px] rounded-md"
      >
        Read
      </button>
    </>
  );
};

export default ReadListButton;
