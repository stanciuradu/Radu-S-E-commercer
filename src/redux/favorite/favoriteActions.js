// actiunile sunt simple functii care returnează un obiect
export default function addToFavorite(product) {
  return {
    type: "ADD_TO_FAVORITE",
    payload: product,
  };
}
