import React, { useState } from 'react'

export default function FilterExample() {
    const [search, setSearch] = useState('')

    const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Pineapple']

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div style={{ padding: '20px' }}>
            <input 
                type="text" 
                placeholder="Search items..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

