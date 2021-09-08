import React from 'react'
import './DropDownList.css'

export default function DropDownList({ list, select }) {
    const handleChange = (e) => {
        select(e.target.value)
    }
    
    return (
        <div>
            <select onChange={handleChange}>
                <option value={""}>Select Brand</option>
                {
                    list && list.map(item => 
                        <option key={item.name} value={item.name}>
                            {item.name}
                        </option>    
                    )
                }
            </select>
        </div>
    )
}
