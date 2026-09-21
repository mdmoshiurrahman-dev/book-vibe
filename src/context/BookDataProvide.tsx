"use client";

import { BookDataType } from "@/types/BookData";
import { createContext, ReactNode, useState } from "react";

export const bookDataContext = createContext({});
const BookDataProvider = ({ children }: { children: ReactNode }) => {
    const [readList, setReadList] = useState<BookDataType[]>([]);
    const [wishList, setWishList] = useState<BookDataType[]>([]);
    const dataSet = {
        readList,
        setReadList,
        wishList,
        setWishList,
    };
    return (
        <bookDataContext.Provider value={dataSet}>
            {children}
        </bookDataContext.Provider>
    );
};

export default BookDataProvider;
