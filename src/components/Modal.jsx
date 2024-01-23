import { Dialog } from "@headlessui/react";

function Modal({ isOpen, setIsOpen, children }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div
        className="fixed inset-0 bg-black/60 custom-blur"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="max-w-lg rounded-lg bg-orange-100 pl-10 pt-4 pr-10 pb-5">
          {/* <Dialog.Title className="font-bold mt-4 mb-4">
            Deactivate account
          </Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description> */}

          {/* <p className="text-white">
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p> */}
          {children}

          <div className="flex justify-end">
            <button
              className="hover:bg-red-300 rounded-md cursor-pointer pl-2 pr-2"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default Modal;
