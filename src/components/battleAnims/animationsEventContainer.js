import React, { useEffect, useState, useContext } from 'react'
import { ClassContext } from '@/context/classContext'
import WeaponForm from './weaponForm'

import CodeBlock from '../codeBlock'

function formatAnimationEventText(animationsObject, classPointer) {
  if (!animationsObject) return

  let res = []
  let entries = 0
  let entryAnim = ""

  res.push(`${classPointer}_Anim:`)
  for (const key in animationsObject) {

    if (!animationsObject[key]) continue

    if (key != "Unarmed") { entryAnim = key }

    entries++

    if (key == "Magic") {
      res.push(`AnimaAnim(${classPointer}Magic)`)
      res.push(`LightAnim(${classPointer}Magic)`)
      res.push(`DarkAnim(${classPointer}Magic)`)
      entries++
      entries++
      continue
    }

    if (key == "Axe") {
      res.push(`AxeAnim(${classPointer}Axe)`)
      res.push(`HandAxeAnim(${classPointer}Handaxe)`)
      entries++
      continue
    }

    res.push(`${key}Anim(${classPointer}${key})`)
  }
  res.push(`animEntry(${classPointer}${entryAnim})`)
  entries++
  res.push(`weaponAnimEnd(${entries})`)

  return res
}

function AnimationsEventContainer({ filePath }) {

  const [animationType, setAnimationType] = useState({})

  const classPointer = useContext(ClassContext).classContextData.classObject["Class Pointer"]

  useEffect(
    () => {
      const asd = formatAnimationEventText(animationType, classPointer)
      console.log(asd)
    },
    [animationType]
  )

  return (
    <>
      <hr />
      <h5>Linking battle animation pointer with definitions</h5>
      <small className="text-muted wrap-container"><em>{filePath}</em></small>
      <div className='d-flex'> <WeaponForm setParent={setAnimationType} className={"mt-2"} /> </div>
      {
        formatAnimationEventText(animationType, classPointer).length > 3 &&
        <>
          <hr/>
          <h6>Animation definitions</h6>
          <CodeBlock>
            {formatAnimationEventText(animationType, classPointer).join("\n")}
          </CodeBlock>
        </>
      }
    </>
  )
}

export default AnimationsEventContainer
