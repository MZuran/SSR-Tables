'use client'

import React, { useEffect } from 'react'

import CsvInput from '@/components/csvInput'
import ClassTableCsv from '@/components/tables/classTable'
import NameDecriptionReference from '@/components/nameDescriptionReference'
import MapSprites from '@/components/mapSprites/mapSprites'
import PromotionContainer from '@/components/promotion/promotionContainer'
import FE8PromoTable from '@/components/tables/fe8PromoTable'

import { ClassContext } from '@/context/classContext'
import { useClassContext } from '@/hooks/useClassContext'

function Home() {
  const { classContextData, updateClassContext, classContextUpdateNumber } = useClassContext();

  const filePathItems = [
    "Veslyquix/SRR_FEGBA/blob/main/Patches/FE8/PromotionItemUseLists/Installer.event",
    "Veslyquix/SRR_FEGBA/blob/main/Patches/FE7/PromotionItemUseLists/Installer.event",
    "Veslyquix/SRR_FEGBA/blob/main/Patches/FE6/PromotionItemUseLists/Installer.event",
  ]

  return (
    <ClassContext.Provider value={{ classContextData, updateClassContext, classContextUpdateNumber }}>
      <div className='page-container'>
        <CsvInput onLoadData={updateClassContext} />
        {
          classContextData &&
          <>
            <PromotionContainer filePath={filePathItems} />
            <ClassTableCsv game={"FE6"} filePath={"veslyquix/SRR_FEGBA/Patches/FE6/Tables/ClassFE6Form_0060A0E8.csv"} />
            <ClassTableCsv game={"FE7"} filePath={"veslyquix/SRR_FEGBA/Patches/FE7/Tables/ClassForm_00BE015C.csv"} />
            <ClassTableCsv game={"FE8"} filePath={"Vesly01/SkillSystem/Tables/NightmareModules/CharactersClasses/ClassTable.csv"} />
            <FE8PromoTable filePath={"Vesly01/SkillSystem/blob/Randomizer_AddItems/Tables/NightmareModules/CharactersClasses/PromotionBranchEditor.csv"} />
            <NameDecriptionReference filePath={"veslyquix/SRR_FEGBA/Text/Names.txt"} />
            <MapSprites filePath={"veslyquix/SRR_FEGBA/gfx/MapSprites/Installer.event"} />
          </>
        }
      </div>
    </ClassContext.Provider>
  )
}

export default Home
