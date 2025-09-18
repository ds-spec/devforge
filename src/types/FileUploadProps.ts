export interface FileUploadProps {
  setFileName: (fileName: string) => void;
  setFileType: (fileType: string) => void;
  fileName: string;
  fileType: string;
}
