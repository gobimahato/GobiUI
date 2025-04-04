"use client";

import { UploadButton, UploadDropzone } from "@/lib/uploadthing";

export function UploadthingImageUpload() {
  return (
    <UploadButton
      className="rounded-md border-1 p-12 md:p-20"
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res[0].ufsUrl);
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}

export function UploadthingFileUpload() {
  return (
    <UploadDropzone
      endpoint="productFileUpload"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res[0].ufsUrl);
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
