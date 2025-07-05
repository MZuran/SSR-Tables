import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import CopyToClipboardButton from './copyToClipboardButton';

function CsvTable({ header, contentArray, tableName, filePath, altHeader }) {
  const [useAltHeader, setUseAltHeader] = useState(false);

  const headers = (useAltHeader && altHeader ? altHeader : header).split(',');

  return (
    <div className='component-container'>
      <div className="mb-2">
        <h5>{tableName}</h5>
        <small className="text-muted"><em>{filePath}</em></small>
        <Form.Check
          type="switch"
          label="Use original column names"
          checked={useAltHeader}
          onChange={() => setUseAltHeader(!useAltHeader)}
          className="mt-2 switch-headers"
        />
        <CopyToClipboardButton textToCopy={contentArray[0]}/>
      </div>
      <div className='scrollable-container'>

        <Table striped bordered hover className='csv-table'>
          <thead>
            <tr>
              {headers.map((col, idx) => (
                <th key={idx}>{col.trim()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {contentArray.map((row, rowIndex) => {
              const rowData = row.split(',');
              return (
                <tr key={rowIndex}>
                  {rowData.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell.trim()}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default CsvTable;
