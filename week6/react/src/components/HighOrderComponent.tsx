import React from 'react'
import { HocOne } from './HocOne'

const HelloWorld = ({title}:{title:string}) => {
return <h1>Hello, {title}!</h1>
}
export const HighOrderComponent = HocOne(HelloWorld)
