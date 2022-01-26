import React, {useState, useEffect} from 'react'
import {GifGridItem} from './GifGridItem'

import {useFetchGifs} from './hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const {data:images,  loading } = useFetchGifs( category );

    //useEffect(  () => {
    //    getGifs ( category )
    //      .then( setImages )
    //},[ category ])




    return(
        <>
            <h3 className="animate__animated animate__fadeIn" >{ category }</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p> }

            {loading ? 'Cargando...' : ''}

            <div className="card-grid">

                <ol>
                    {
                        images.map( img => (
                            <GifGridItem
                                key={img}
                                {...img }
                            />
                        ))
                    }
                </ol>

            </div>
        </>

    )
}