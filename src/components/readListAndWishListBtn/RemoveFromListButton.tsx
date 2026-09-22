"use client";

import { bookDataContext } from "@/context/BookDataProvide";
import { useContext } from "react";
import { BookStateType } from "./ReadListButton";
import { BookDataType } from "@/types/BookData";

const RemoveFromListButton = ({ book }: { book: BookDataType }) => {
  const readListState = useContext(bookDataContext) as BookStateType;
  const { readList, setReadList } = readListState;
  const handelRemoveButton = (book: BookDataType) => {
    const remaining = readList.filter((f) => f.bookId !== book.bookId);
    setReadList(remaining);
  };
  return (
    <>
      <button
        onClick={() => handelRemoveButton(book)}
        className="cursor-pointer bg-red-500 text-white font-semibold px-4 py-1.5 rounded-2xl"
      >
        Remove
      </button>
    </>
  );
};

export default RemoveFromListButton;
