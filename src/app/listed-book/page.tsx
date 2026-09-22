"use client";
import { BookDataType } from "@/types/BookData";
import { useContext } from "react";
import { bookDataContext } from "@/context/BookDataProvide";
import AddedList from "@/components/AddedList";
import AddedWishList from "@/components/AddedWishList";
import EmptyList from "@/components/EmptyList";
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
      <div>
        <div className="bg-gray-100 font-bold text-2xl text-center py-5 my-3 mx-2 rounded-xl">
          <h2>Books</h2>
        </div>
      </div>
      <div>
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Read List"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div className="flex flex-col gap-4">
              {readList.length !== 0 ? (
                readList.map((book) => (
                  <AddedList key={book.bookId} book={book} />
                ))
              ) : (
                <EmptyList />
              )}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Wish List"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div className="flex flex-col gap-4">
              {wishList.length !== 0 ? (
                wishList.map((book) => (
                  <AddedWishList key={book.bookId} book={book} />
                ))
              ) : (
                <EmptyList />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
