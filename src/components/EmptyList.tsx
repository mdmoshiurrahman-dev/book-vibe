import Link from "next/link";

const EmptyList = () => {
  return (
    <div className="h-[35vh] flex justify-center items-center flex-col">
      <h2 className="font-bold text-[18px]">No Books Added Yet!</h2>
      <Link href="/all-book-list">
        <p className="text-blue-600 text-[12px] cursor-pointer">
          Go to Book section to select
        </p>
      </Link>
    </div>
  );
};

export default EmptyList;
