export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const requestCategories = await fetch(url);
  const requestResponse = await requestCategories.json();
  return requestResponse;
  // console.log(requestResponse);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const requestCategoryAndQuery = await fetch(url);
  const requestResponse = await requestCategoryAndQuery.json();
  return requestResponse;
}
