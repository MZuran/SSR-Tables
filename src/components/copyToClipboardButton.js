// CopyToClipboardButton.js
import React from 'react';
import { Button } from 'react-bootstrap';

function CopyToClipboardButton({ textToCopy }) {
  const handleCopy = () => {
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Copied to clipboard:', textToCopy);
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
      });
  };

  return (
    <Button className='button-style' onClick={handleCopy}>
      Copy to clipboard
    </Button>
  );
}

export default CopyToClipboardButton;
