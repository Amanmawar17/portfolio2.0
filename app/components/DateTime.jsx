"use client";

import { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className='flex gap-2' >
            <p suppressHydrationWarning> {date.toLocaleDateString()}</p>
            <p suppressHydrationWarning> {date.toLocaleTimeString()}</p>

        </div>
    )
}

export default DateTime