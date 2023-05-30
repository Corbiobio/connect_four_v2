import React from 'react'

export default function Marker_container(img) {
    return (
        <div className='marker_container' id='marker_container'>
            <div className='column_marker'><img src={img.src_img} alt="marker" /></div>
            <div className='column_marker'><img src={img.src_img} alt="marker" /></div>
            <div className='column_marker'><img src={img.src_img} alt="marker" /></div>
            <div className='column_marker'><img src={img.src_img} alt="marker" /></div>
            <div className='column_marker'><img src={img.src_img} alt="marker" /></div>
            <div className='column_marker'><img src={img.src_img} alt="marker" /></div>
            <div className='column_marker'><img src={img.src_img} alt="marker" /></div>
        </div>
    )
}
