import type { Metadata } from "next";
import { BookList } from "./components/booklist/BookList";

export default function IndexPage() {
  return <BookList />;
}

export const metadata: Metadata = {
  title: "Book Store",
};
