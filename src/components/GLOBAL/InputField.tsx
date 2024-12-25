"use client";

import { ChangeEventHandler } from "react";

const InputField = ({ placeholder, type = "text", value, onChange, min, max }: { placeholder: string, type?: string, value: string, min?: string, max?: string, onChange: ChangeEventHandler<HTMLInputElement> }) => {
    return <div className='flex flex-col w-full'>
        <label className='text-[#777]- text-black text-sm'>{placeholder} <b className='text-[#fe8f01]'>*</b></label>
        <input min={min} max={max} className='px-3 py-2 w-full outline-none shadow focus:shodow-md border rounded-2xl focus:border-[#096982]' type={type} value={value} onChange={onChange} />
    </div>
}

export default InputField;