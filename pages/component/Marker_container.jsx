import React from 'react'

export default function Marker_container({ src_img, ref_use }) {
    return (
        <div className='marker_container' ref={ref_use}>
            <div className='column_marker'><img src={src_img} alt="marker" /></div>
            <div className='column_marker'><img src={src_img} alt="marker" /></div>
            <div className='column_marker'><img src={src_img} alt="marker" /></div>
            <div className='column_marker'><img src={src_img} alt="marker" /></div>
            <div className='column_marker'><img src={src_img} alt="marker" /></div>
            <div className='column_marker'><img src={src_img} alt="marker" /></div>
            <div className='column_marker'><img src={src_img} alt="marker" /></div>
        </div>
    )
}
