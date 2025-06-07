"use client";

import { FC, useEffect } from "react";

const PreviewModal: FC<{
  open: boolean;
  fileUrl: string;
  onClose: () => void;
}> = ({ open, fileUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-[90vw] h-[80vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-textSecondary"
        >
          ✖
        </button>
        <iframe
          src={fileUrl}
          className="w-full h-full rounded-b-xl"
          title="Preview"
        />
      </div>
    </div>
  );
};

export default PreviewModal;
