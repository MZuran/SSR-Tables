'use client'

import React, { useEffect } from 'react'

import CsvInput from '@/components/csvInput'
import ClassTableContainer from '@/components/classTables/classTableContainer'
import NameDecriptionReference from '@/components/nameDescriptionReference'
import MapSprites from '@/components/mapSprites/mapSprites'
import PromotionContainer from '@/components/promotion/promotionContainer'
import FE8PromoTable from '@/components/classTables/fe8PromoTable'
import BattleAnimsContainer from '@/components/battleAnims/battleAnimsContainer'
import MovementCostContainer from '@/components/movementCosts/movementCostContainer'
import ClassTypesContainer from '@/components/classType/classTypesContainer'
import TerrainBonusesContainer from '@/components/terrainBonuses/terrainBonusesContainer'

import { ClassContext } from '@/context/classContext'
import { useClassContext } from '@/hooks/useClassContext'

import filePaths from '../utils/filePaths'

function Home() {
  const { classContextData, updateClassContext, classContextUpdateNumber } = useClassContext();


  return (
    <ClassContext.Provider value={{ classContextData, updateClassContext, classContextUpdateNumber }}>
      <div className='page-container'>
        <CsvInput onLoadData={updateClassContext} />
        {
          classContextData &&
          <>
            <PromotionContainer filePath={filePaths.promotionItems} />
            <MovementCostContainer/>
            <TerrainBonusesContainer/>
            <ClassTypesContainer filePaths={filePaths.classTypes}/>
            <ClassTableContainer filePaths={filePaths.classTables}/>
            <FE8PromoTable  filePath={filePaths.promotionTableFE8}/>
            <NameDecriptionReference  filePath={filePaths.textNamesFile}/>
            <MapSprites  filePath={filePaths.mapSprites}/>
            <BattleAnimsContainer filePath={filePaths.battleAnimations} />
          </>
        }
      </div>
    </ClassContext.Provider>
  )
}

export default Home
