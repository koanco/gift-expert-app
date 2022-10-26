import React, { useEffect, useState} from 'react'
import { GifItem } from './GifItem';
import { getGif } from '../helpers/getGif'
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs({ category })

 
  return (
    <>
      { isLoading && <p>Cargando..</p>}
      <h3>{category}</h3>
      <div className='card-grid'>
        {images.map(img => (<GifItem key={img.id}
          {...img}
        />))}
      </div>
      </>
  )
}
