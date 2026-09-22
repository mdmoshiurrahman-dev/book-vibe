import BookCart from "@/components/bookCart/BookCart";
import Banner from "@/components/homepage/Banner";
import { BookDataType } from "@/types/BookData";
const bookDataPromise = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`, {
    next: { revalidate: 3600 },
  });
  return res.json();
};

export default async function Home() {
  const data: BookDataType[] = await bookDataPromise();
  const bastRettingBooks = data.filter((i) => i.rating >= 4.7);
  return (
    <main>
      <div>
        <Banner />
      </div>
      <h2 className="text-center text-3xl font-semibold mt-12">
        Popular Books
      </h2>
      <section>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 mt-10 mx-2">
          {bastRettingBooks.map((book) => (
            <BookCart key={book.bookId} book={book} />
          ))}
        </div>
      </section>
    </main>
  );
}
