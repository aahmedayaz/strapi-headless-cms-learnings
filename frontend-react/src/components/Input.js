import React from 'react'

const Input = ({label, type = 'text', inputState, onChangeHandler, placeholder, error}) => {
    return (
        <div className='w-[100%] flex flex-col gap-[3px]'>
            <label className='text-sm'>{label}</label>
            <input 
                type={type}
                value={inputState}
                onChange={onChangeHandler}
                placeholder={placeholder}
                className='px-[15px] py-[7px] text-black border-none outline-none bg-white rounded-md'
            />
            <span className='h-[25px] text-[12px] text-red-600'>{error == '' ? '' : `Error: ${error}`}</span>
        </div>
    )
}

export default Input