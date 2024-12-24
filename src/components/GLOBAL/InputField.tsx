"use client";

import { ChangeEventHandler } from "react";

const InputField = ({ placeholder, type = "text", value, onChange }: { placeholder: string, type?: string, value: string, onChange: ChangeEventHandler<HTMLInputElement> }) => {
    return <div className='flex flex-col'>
        <label className='text-[#777]- text-black text-sm'>{placeholder} <b className='text-[#fe8f01]'>*</b></label>
        <input className='px-3 py-2 outline-none shadow focus:shodow-md border rounded-md focus:border-[#096982]' type={type} value={value} onChange={onChange} />
    </div>
}

export default InputField;