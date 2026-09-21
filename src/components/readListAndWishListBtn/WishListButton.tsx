"use client";
import { bookDataContext } from "@/context/BookDataProvide";
import { BookDataType } from "@/types/BookData";
import { useContext } from "react";

export interface WishListButtonProps {
  book: BookDataType;
}

export interface BookStateType {
  wishList: BookDataType[];
  setWishList: (book: BookDataType[]) => void;
}

const WishListButton = ({ book }: WishListButtonProps) => {
  const Wishlist = useContext(bookDataContext) as BookStateType;
  const { wishList, setWishList } = Wishlist;
  const handelWishList = (book: BookDataType) => {
    const isExist = wishList.find((f) => f.bookId === book.bookId);
    if (!isExist) {
      setWishList([...wishList, book]);
    }
  };
  return (
    <>
      <button
        onClick={() => handelWishList(book)}
        className="bg-[#23BE0A] px-3.75 py-2 font-semibold text-white cursor-pointer text-[14px] rounded-md"
      >
        Wishlist
      </button>
    </>
  );
};

export default WishListButton;
