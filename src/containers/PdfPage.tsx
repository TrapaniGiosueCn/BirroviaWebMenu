import React, { useState } from 'react';
import { Document, Page, pdfjs }     from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export const PdfPage = (props: {url: string}) => {
  const [numPages, setNumPages] : any = useState(null)

  const onDocumentLoadSuccess = ({numPages}: any) => {
    setNumPages(numPages)
  }

  return (
    <Document
      file={{url: props.url}}
      onLoadSuccess={onDocumentLoadSuccess}
      onLoadError={() => {
        console.log("CALLED");
      }}
      onLoadProgress={() => {
        console.log("PRGREOSS");
      }}
    >
      {Array.from(
        new Array(numPages),
        (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
          />
        ),
      )}
    </Document>
  )
}