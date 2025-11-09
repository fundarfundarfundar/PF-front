"use client";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white-strong rounded-xl shadow-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <h2 className="text-lg font-semibold text-gray-strong mb-4">
            {title}
          </h2>
        )}
        {children}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-medium hover:text-gray-strong cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
