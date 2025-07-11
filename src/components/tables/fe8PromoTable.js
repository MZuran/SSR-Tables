import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import CopyToClipboardButton from '../copyToClipboardButton';

import { ClassContext } from '@/context/classContext';

function FE8PromoTable({ filePath }) {
  const [useAltHeader, setUseAltHeader] = useState(false);
  const [contentArray, setContentArray] = useState([]);
  const [mappedContentArray, setMappedContentArray] = useState();

  const { classContextUpdateNumber, classContextData } = useContext(ClassContext);

  const originalHeaders = "Class Pointer,Branch 1,Branch 2";
  const altHeaders = "INLINE NewPromotionBranchTable,B0,B1";

  const headers = (useAltHeader ? altHeaders : originalHeaders).split(',');

  const tableName = "FE8 Promotion Table";

  useEffect(() => {
    const mainBranch = classContextData.classObject["Menu Class"] || "0x00";
    const altBranch = classContextData.tableData["Alt Class"] || "0x00";
    const classPointer = classContextData.classObject["Class Pointer"] || "Class Pointer";

    const newContentArray = [classPointer, mainBranch, altBranch];
    setContentArray(newContentArray);

    const tableColumns = newContentArray.map(
      (data, index) => <td key={index}>{data}</td>
    );

    console.log(tableColumns)

    setMappedContentArray(tableColumns);
  }, [classContextUpdateNumber, classContextData]);


  return (
    <>
      <div className='component-container'>
        <div className="mb-2">
          <h5>{tableName}</h5>
          <small className="text-muted wrap-container">
            <em>{filePath}</em>
          </small>
          <Form.Check
            type="switch"
            label="Use alternate column names"
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
                  <th key={idx}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {mappedContentArray}
              </tr>
            </tbody>
          </Table>
        </div>
        <CopyToClipboardButton textToCopy={contentArray.flat().join(',')} />
      </div>
    </>
  );
}

export default FE8PromoTable;
