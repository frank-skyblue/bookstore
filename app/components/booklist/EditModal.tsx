import { useState } from "react";
import { update } from "@/lib/features/booklist/bookListSlice";
import { useAppDispatch } from "@/lib/hooks";

export const EditModal = ({
  setShowModal,
  currentName,
  currentPrice,
  currentCategory,
  currentId,
}: {
  setShowModal: Function;
  currentName: string;
  currentPrice: number;
  currentCategory: string;
  currentId: number;
}) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>(currentName);
  const [price, setPrice] = useState<number>(currentPrice);
  const [category, setCategory] = useState<string>(currentCategory);

  const handleSubmit = () => {
    dispatch(update({ name, price, category, id: currentId }));
    setShowModal(false);
  };

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => setShowModal(false)}
      >
        <div className="relative my-6 mx-auto w-64">
          <div
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-3 pb-1 border-b border-solid border-text-primary/50 rounded-t">
              <h3 className="text-xl font-semibold">Edit book</h3>
            </div>

            <form className="px-3 py-2 flex flex-col gap-y-1">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                className="border border-solid rounded p-1"
                placeholder="Book name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <label className="font-semibold">Price</label>
              <input
                type="text"
                className="border border-solid rounded p-1"
                onChange={(e) => setPrice(Number(e.target.value))}
                value={price}
              />

              <label className="font-semibold">Category</label>
              <input
                type="text"
                className="border border-solid rounded p-1"
                placeholder="Book category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              />

              <div className="flex justify-between mt-1 border-text-primary/50">
                <button
                  className="bg-green-200 text-xs font-bold uppercase px-4 py-2 outline-none rounded"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  className="bg-blue-200 text-xs font-bold uppercase px-4 py-2 outline-none rounded"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
