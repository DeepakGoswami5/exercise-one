import React from 'react'

export const Suggestions = (skuList) => {
    
    const options = skuList.map(r => (
      <li key={r.id}>
        {r.name}
      </li>
    ))
    return (<ul>{options}</ul>)
}
