"use client";

import { ChangeEventHandler } from "react";

const InputField = ({ placeholder, type = "text", value, onChange, min, max, required = true }: { placeholder: string, type?: string, value: string, min?: string, max?: string, onChange: ChangeEventHandler<HTMLInputElement>, required?: boolean }) => {
    return <div className='flex flex-col w-full'>
        <label className='text-[#777]- text-black font-medium text-lg'>{placeholder} {required && <b className='text-[#fe8f01]'>*</b>}</label>
        <input required={required} min={min} max={max} className='px-3 py-2 font-medium text-lg w-full outline-none shadow focus:shodow-md border rounded-2xl focus:border-[#096982]' type={type} value={value} onChange={onChange} />
    </div>
}

export const dynamic = 'force-dynamic';

export default InputField;