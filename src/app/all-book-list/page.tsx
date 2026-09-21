import BookCart from "@/components/bookCart/BookCart";
import { BookDataType } from "@/types/BookData";

const allBooksPromise = async()=>{
    const res = await fetch('http://localhost:5000/books', {cache:'force-cache'});
    return res.json();
}

const AllBookList = async() => {
const data:BookDataType[] =  await allBooksPromise();
    return <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 mt-10 mx-2">
        {
            data.map(book=> <BookCart key={book.bookId} book={book}/>)
        }
    </div>
}

export default AllBookList;