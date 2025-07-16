'use client'

import React, { useEffect } from 'react'

import CsvInput from '@/components/csvInput'
import ClassTableContainer from '@/components/classTables/classTableContainer'
import NameDecriptionReference from '@/components/nameDescriptionReference'
import MapSprites from '@/components/mapSprites/mapSprites'
import PromotionContainer from '@/components/promotion/promotionContainer'
import FE8PromoTable from '@/components/classTables/fe8PromoTable'
import BattleAnimsContainer from '@/components/battleAnims/battleAnimsContainer'

import { ClassContext } from '@/context/classContext'
import { useClassContext } from '@/hooks/useClassContext'

function Home() {
  const { classContextData, updateClassContext, classContextUpdateNumber } = useClassContext();

  const filePathItems = [
    "Veslyquix/SRR_FEGBA/blob/main/Patches/FE8/PromotionItemUseLists/Installer.event",
    "Veslyquix/SRR_FEGBA/blob/main/Patches/FE7/PromotionItemUseLists/Installer.event",
    "Veslyquix/SRR_FEGBA/blob/main/Patches/FE6/PromotionItemUseLists/Installer.event",
  ]

  const filePathAnimations = {
    animsFolder: "Veslyquix/SRR_FEGBA/gfx/Anims/png/",
    arrayLocation: "Veslyquix/SRR_FEGBA/gfx/Anims/.setID.py",
    definitionsScriptLocation: "Veslyquix/SRR_FEGBA/gfx/Anims/GenerateDefinitions.bat",
    renamingScriptLocation: "Veslyquix/SRR_FEGBA/gfx/Anims/RenameFolders.cmd",
    pointersLocation: "Veslyquix/SRR_FEGBA/gfx/Anims/Animations.event"
  }

  return (
    <ClassContext.Provider value={{ classContextData, updateClassContext, classContextUpdateNumber }}>
      <div className='page-container'>
        <CsvInput onLoadData={updateClassContext} />
        {
          classContextData &&
          <>
            <PromotionContainer filePath={filePathItems} />
            <ClassTableContainer/>
            <FE8PromoTable filePath={"Vesly01/SkillSystem/blob/Randomizer_AddItems/Tables/NightmareModules/CharactersClasses/PromotionBranchEditor.csv"} />
            <NameDecriptionReference filePath={"veslyquix/SRR_FEGBA/Text/Names.txt"} />
            <MapSprites filePath={"veslyquix/SRR_FEGBA/gfx/MapSprites/Installer.event"} />
            <BattleAnimsContainer filePath={filePathAnimations} />
          </>
        }
      </div>
    </ClassContext.Provider>
  )
}

export default Home
