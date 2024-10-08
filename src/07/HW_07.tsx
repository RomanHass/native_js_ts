import { useState } from "react"
import { AddressType, LessonType } from "./07.test"

export type ManType = {
  name: string
  age: number
  lessons: Array<LessonType>
  address: AddressType
}

type PropsType = {
  title: string
  man: ManType
  food: Array<string>
  car: {model: string}
}

function useRomanState(m: string) {
  return [ m, function(){} ]
}

function useRomanState2(m: string) {
  return { message: m, 
    setMessage: function(){} 
  }
}

export const ManComponents: React.FC<PropsType> = ({title, man, ...props}) => {

  const [message, setMessage] = useRomanState('hello')
  // const {message, setMessage} = useRomanState2('hello')

  return (
    <div>
      <h1>{title}</h1>
      <hr />
      <div>
        {props.car.model}
      </div>
      <div>
        {man.name}
      </div>
    </div>
  )
}