import React from 'react'
import { FaCheck } from 'react-icons/fa'

const AgreementCheckButton = ({ label, isChecked, onClick }: { label: string, isChecked: boolean, onClick: Function }) => {
    return (
        <button type='button' onClick={e => onClick()} className='flex items-center gap-2 w-full'>
            <div className={`w-5 flex items-center justify-center h-5 border transition-all rounded-md ${isChecked ? 'bg-primary border-transparent' : ''}`}>
                <FaCheck className={`text-sm transition-all text-white ${isChecked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
            </div>
            <span className='leading-none'>{label}</span>
        </button>
    )
}

export default AgreementCheckButton