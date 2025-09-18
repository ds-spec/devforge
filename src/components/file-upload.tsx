"use client";
import { FileUploadProps } from "@/types/FileUploadProps";
import { CloudUpload } from "lucide-react";
import { useRef } from "react";

export default function FileUpload({
  setFileName,
  setFileType,
  fileName,
  fileType,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = (): void => {
    inputRef.current?.click();
  };
  const fileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files;
    if (!files) {
      console.log("No files found");
      return;
    }
    setFileName(files[0]?.name);
    setFileType(files[0]?.type);
  };
  return (
    <>
      <input
        ref={inputRef}
        onChange={(e) => fileUpload(e)}
        type="file"
        id="file-upload"
        className="hidden"
      />
      <button
        onClick={handleButtonClick}
        className="rounded-full hover:bg-neutral-800 transition-colors duration-100 cursor-pointer p-3"
        aria-label="Send message"
      >
        <CloudUpload color="#fff" />
      </button>
    </>
  );
}
