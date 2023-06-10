import React, {useState} from "react";

export type ManType={
    name: string
    age: number
    lessons: Array<{title:string}>
    address: {
        street: {
            title: string}}
}

type PropsType={
title:string
    man:ManType
}


const ManComponent:React.FC<PropsType>=(props)=>{
    const {title}=props
    const {name}=props.man

    const[message, setMessage]=useState<string>('hello')
    return <div>
        h1{props.title}
        <hr/>
        <div>{props.man.name}</div>
    </div>
}