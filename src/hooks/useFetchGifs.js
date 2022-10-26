import React, { useState,useEffect} from 'react'
import { getGif } from '../helpers/getGif';

export const useFetchGifs = ({ category, ...props}) => {
    const [dataImage, setDataImage] = useState({
        images: [],
        loading:false
    });

    useEffect(() => {
        getImages(category);
        
    }, []);

    const getImages = async () => {
         setDataImage({
             ...dataImage,
             loading:true
         });
        try {
        const gifs = await getGif(category);

        setDataImage({
          ...dataImage,
          images: gifs,
          loading: false,
        });    
        } catch (error) {
              setDataImage({
                 images: [],
                loading: false,
              });    
        }
        
    };
  
    return {
        images: dataImage.images,
        isLoading:dataImage.loading

    }
    
  
}
