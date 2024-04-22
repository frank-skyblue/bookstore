"use client";

import { useState } from "react";

import {
  add,
  remove,
  update,
  selectList,
} from "@/lib/features/booklist/bookListSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { TrashIcon, PlusIcon } from "@heroicons/react/24/solid";
import { AddModal } from "./AddModal";
import { EditModal } from "./EditModal";

type ModalType = "add" | "edit" | "";

export const BookList = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectList);

  const [showModal, setShowModal] = useState<Boolean>(false);
  const [modalType, setModalType] = useState<ModalType>("");

  const [currentName, setCurrentName] = useState<string>("");
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [currentId, setCurrentId] = useState<number>(0);

  return (
    <>
      <div className="flex flex-col h-full px-64">
        <div className="flex justify-end">
          <button
            className="flex justify-center bg-green-200 rounded-lg py-1 px-3 mb-2"
            onClick={() => {
              setShowModal(true);
              setModalType("add");
            }}
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
        <Headers />
        {list.map((book) => (
          <div
            className="flex bg-gray-300 text-lg p-2 odd:bg-gray-50"
            onClick={() => {
              setShowModal(true);
              setModalType("edit");
              setCurrentName(book.name);
              setCurrentPrice(book.price);
              setCurrentCategory(book.category);
              setCurrentId(book.id);
            }}
            key={book.id}
          >
            <span className="basis-1/4">
              <span onClick={(e) => e.stopPropagation()}>{book.name}</span>
            </span>
            <span className="basis-1/4">
              <span onClick={(e) => e.stopPropagation()}>${book.price}</span>
            </span>
            <span className="basis-1/4">
              <span onClick={(e) => e.stopPropagation()}>{book.category}</span>
            </span>
            <span
              className="basis-1/4 flex gap-x-3 justify-end"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  dispatch(remove(book.id));
                }}
              >
                <TrashIcon className="h-6 w-6" />
              </button>
            </span>
          </div>
        ))}
      </div>
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          type={modalType}
          currentName={currentName}
          currentPrice={currentPrice}
          currentCategory={currentCategory}
          currentId={currentId}
        />
      ) : null}
    </>
  );
};

const Headers = () => {
  return (
    <div className="flex text-xl font-semibold p-2 border-t border-b border-black/30">
      <span className="basis-1/4">Name</span>
      <span className="basis-1/4">Price</span>
      <span className="basis-1/4">Category</span>
      <span className="basis-1/4"></span>
    </div>
  );
};

const Modal = ({
  setShowModal,
  type,
  currentName,
  currentPrice,
  currentCategory,
  currentId,
}: {
  setShowModal: Function;
  type: ModalType;
  currentName: string;
  currentPrice: number;
  currentCategory: string;
  currentId: number;
}) => {
  if (type === "add") {
    return <AddModal setShowModal={setShowModal} />;
  }
  if (type === "edit") {
    return (
      <EditModal
        setShowModal={setShowModal}
        currentName={currentName}
        currentPrice={currentPrice}
        currentCategory={currentCategory}
        currentId={currentId}
      />
    );
  }

  return null;
};
