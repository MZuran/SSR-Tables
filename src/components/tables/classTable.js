import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import CopyToClipboardButton from '../copyToClipboardButton';

import { headersObject } from '@/utils/headers';
import { ClassContext } from '@/context/classContext';

function ClassTableCsv({ game, filePath }) {
  const [useAltHeader, setUseAltHeader] = useState(false);
  const [contentArray, setContentArray] = useState()

  let { classContextUpdateNumber, classContextData } = useContext(ClassContext)

  const ogHeader = headersObject.parsed[game];
  const altHeader = headersObject.unparsed[game];

  const headers = (useAltHeader && altHeader ? altHeader : ogHeader).split(',');

  const tableName = game + " Table";

  useEffect(
    () => {
      setContentArray(classContextData.tableData[game].split('\n').map(row => row.split(',')))
    },
    [classContextUpdateNumber]
  )

  return (
    <>
      {
        contentArray &&
        <div className='component-container'>
          <div className="mb-2">
            <h5>{tableName}</h5>
            <small className="text-muted wrap-container">
              <em>{filePath}</em>
            </small>
            <Form.Check
              type="switch"
              label="Use original column names"
              checked={useAltHeader}
              onChange={() => setUseAltHeader(!useAltHeader)}
              className="mt-2 switch-headers"
            />
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
                {contentArray.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell.trim()}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <CopyToClipboardButton textToCopy={contentArray[0].join(',')} />
        </div>
      }
    </>
  );
}

export default ClassTableCsv;
