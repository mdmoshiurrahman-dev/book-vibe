"use client";

import { bookDataContext } from "@/context/BookDataProvide";
import { useContext } from "react";
import { BookDataType } from "@/types/BookData";
interface wishListStateType {
  wishList: BookDataType[];
  setWishList: (book: BookDataType[]) => void;
}

const RemoveFromWishList = ({ book }: { book: BookDataType }) => {
  const wishListState = useContext(bookDataContext) as wishListStateType;
  const { wishList, setWishList } = wishListState;
  const handelRemoveFromWishListButton = (selectedBook: BookDataType) => {
    const remaining = wishList.filter((f) => f.bookId !== selectedBook.bookId);
    setWishList(remaining);
  };
  return (
    <>
      <button
        onClick={() => handelRemoveFromWishListButton(book)}
        className="cursor-pointer bg-red-500 text-white font-semibold px-4 py-1.5 rounded-2xl"
      >
        Remove
      </button>
    </>
  );
};

export default RemoveFromWishList;
