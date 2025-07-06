'use client'

import React from 'react'

import { FE6SRRHeader, unparsedFE6SRRHeader, FE7SRRHeader, unparsedFE7SRRHeader, FE8SRRHeader, unparsedFE8SRRHeader } from '@/utils/headers'

import CsvInput from '@/components/csvInput'
import CsvTable from '@/components/csvTable'
import NameDecriptionReference from '@/components/nameDescriptionReference'
import MapSprites from '@/components/mapSprites/mapSprites'

import { ClassContext } from '@/utils/classContext'

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
      <ClassContext.Provider value={data}>
        <CsvInput onLoadData={setData} />
        {
          data &&
          <>
            <CsvTable game={"FE6"} filePath={"veslyquix/SRR_FEGBA/Patches/FE6/Tables/ClassFE6Form_0060A0E8.csv"} />
            <CsvTable game={"FE7"} filePath={"veslyquix/SRR_FEGBA/Patches/FE7/Tables/ClassForm_00BE015C.csv"} />
            <CsvTable game={"FE8"} filePath={"Vesly01/SkillSystem/Tables/NightmareModules/CharactersClasses/ClassTable.csv"} />
            <NameDecriptionReference filePath={"veslyquix/SRR_FEGBA/Text/Names.txt"} />
            <MapSprites filePath={"veslyquix/SRR_FEGBA/gfx/MapSprites/Installer.event"} />
          </>
        }

      </ClassContext.Provider>
    </div>
  )
}

export default Home
