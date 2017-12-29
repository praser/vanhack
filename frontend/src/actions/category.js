import { apiPost } from './api'
import { CATEGORY_CREATE_URI } from '../apiRoutes';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  }
}

export function createCategory(category, apiToken){
  const categories = apiPost(
    CATEGORY_CREATE_URI,
    {
      body: JSON.stringify(category),
      successMessage: `The ${category.name} category has been created.`,
      errorMessage: `We could not create the ${category.name} category. Please try again.`,
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiToken}`
      })
    },
    receiveCategories
  )

  return categories;
}