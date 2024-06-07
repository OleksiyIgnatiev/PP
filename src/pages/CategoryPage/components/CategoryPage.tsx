import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryPage = () => {
  const {categoryId} = useParams();
  return (
    <div>
      {categoryId}
    </div>
  )
}

export default CategoryPage
