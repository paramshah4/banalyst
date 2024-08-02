'use client'
import { Button, FileInput } from "@mantine/core";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface UploadResponse {
  message: string;
  filenames?: string[];
}

export default function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [message, setMessage] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: UploadResponse = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Error uploading files");
      console.error("Error:", error);
    }
  };

  return (
    // <div className='background-white p-4'>
    //   <form className="text-black" onSubmit={handleSubmit}>
    //     <input type="file" multiple onChange={handleFileChange} />
    //     <button className="text-black" type="submit">Upload</button>
    //   </form>
    //   {message && <p>{message}</p>}
    // </div>
    <>
      <FileInput
        className="text-black"
        label="Upload files"
        description="You can upload multiple files at once"
        placeholder="Choose files"
        value={selectedFiles}
        onChange={setSelectedFiles}
        clearable
        multiple
      />
      <Button onClick={handleSubmit}>Upload</Button>
    </>
  );
}
