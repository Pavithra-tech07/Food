import React from 'react'

export default function Post(item) {
  return (
    <div className="card">
    <div className="card-header">
      {item.title}
    </div>
    <div className="card-body">
      <h5 className="card-title">Special title treatment</h5>
      <p className="card-text">{item.description}</p>
    </div>
  </div>
  )
}
