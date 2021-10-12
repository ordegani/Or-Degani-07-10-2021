import React from 'react'

export default function Result({ GeoPosition}) {
    return (
        <div className="result_container">
            <h3>{GeoPosition}</h3>
        </div>
    )
}
