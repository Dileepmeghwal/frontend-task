import { useState } from "react";
import copy from "copy-to-clipboard";

export const useCopyToClipboard = () => {
    const [copied,setCopied]=useState(false)
  const handleCopyText = (text) => {
    console.log(text);

    if (typeof text === "string" || typeof text === "number") {
      copy(text.toString());
      setCopied(true);
    }
  };

  return [copied, handleCopyText];
};
