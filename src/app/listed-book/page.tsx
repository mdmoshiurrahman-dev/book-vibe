"use client";
import { BookDataType } from "@/types/BookData";
import { useContext } from "react";
import BookCart from "../../components/bookCart/BookCart";
import { bookDataContext } from "@/context/BookDataProvide";
interface BookDataProviderType {
  wishList: BookDataType[];
  setWishList: (book: BookDataType[]) => void;
  readList: BookDataType[]; 
  setReadList: (book: BookDataType[]) => void;
}

const Page = () => {
  const selectedData = useContext(bookDataContext) as BookDataProviderType;
  const { wishList, readList } = selectedData;
  return (
    <div>
      {wishList.map((i) => (
        <BookCart book={i} key={i.bookId} />
      ))}
    </div>
  );
};

export default Page;
