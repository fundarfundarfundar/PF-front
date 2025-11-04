import { toast } from "sonner";

export const confirmAction = (message: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const id = toast.custom(
      () => (
        <div className="inset-0 fixed bg-black">
          <div className="flex flex-col gap-3 bg-white-smoke rounded-lg p-4 shadow-md w-72">
            <p className="text-sm font-medium text-gray-800 text-center">
              {message}
            </p>
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={() => {
                  toast.dismiss(id);
                  resolve(false);
                }}
                className="px-3 py-1 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  toast.dismiss(id);
                  resolve(true);
                }}
                className="px-3 py-1 text-sm rounded-md bg-red-600 text-white hover:bg-red-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ),
      { duration: Infinity, position: "top-center" }
    );
  });
};
