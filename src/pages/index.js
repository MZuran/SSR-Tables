'use client'

import React from 'react'

import { FE6SRRHeader, unparsedFE6SRRHeader, FE7SRRHeader, unparsedFE7SRRHeader, FE8SRRHeader, unparsedFE8SRRHeader } from '@/utils/headers'

import CsvInput from '@/components/csvInput'
import CsvTable from '@/components/csvTable'
import NameDecriptionReference from '@/components/nameDescriptionReference'
import MapSprites from '@/components/mapSprites'

import { useState } from 'react'
import { useEffect } from 'react'

function Home() {

  const [data, setData] = useState(null)

  useEffect(
    () => {
      console.log('Data loaded:', data)
    },
    [data]
  )

  return (
    <div className='page-container'>
      <CsvInput onLoadData={setData} />
      {data &&
        <>
          <CsvTable header={FE6SRRHeader} altHeader={unparsedFE6SRRHeader} contentArray={[data.tableData.FE6]} tableName={"Fire Emblem 6 Table"} filePath={"veslyquix/SRR_FEGBA/Patches/FE6/Tables/ClassFE6Form_0060A0E8.csv"} />
          <CsvTable header={FE7SRRHeader} altHeader={unparsedFE7SRRHeader} contentArray={[data.tableData.FE7]} tableName={"Fire Emblem 7 Table"} filePath={"veslyquix/SRR_FEGBA/Patches/FE7/Tables/ClassForm_00BE015C.csv"} />
          <CsvTable header={FE8SRRHeader} altHeader={unparsedFE8SRRHeader} contentArray={[data.tableData.FE8]} tableName={"Fire Emblem 8 Table"} filePath={"Vesly01/SkillSystem/Tables/NightmareModules/CharactersClasses/ClassTable.csv"} />
          <NameDecriptionReference classTable={data.classObject.ClassTable} className={data.classObject.Name} classDesc={data.classObject.Description} filePath={"veslyquix/SRR_FEGBA/Text/Names.txt"}/>
          <MapSprites sms={data.classObject["Standing Map Anims"]} filePath={"veslyquix/SRR_FEGBA/gfx/MapSprites/Installer.event"}/>
        </>
      }
    </div>
  )
}

export default Home
