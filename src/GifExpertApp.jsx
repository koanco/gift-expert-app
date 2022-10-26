import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Severance', 'Better call saul']);

  const addCategory = (item) => { 
    console.log(item)
    if (categories.includes(item)) { 
      return;
    }
    setCategories([...categories, item]);
  }
  return (
      <>
      <h1>GiftExpertApp</h1>
      <AddCategory setCategory={addCategory} />
       
      {categories.map(category => (<GifGrid key={category} category={category} />))}     
      </>
  )
}
