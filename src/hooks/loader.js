async function getData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`HTTP error: Status ${response.status}`);
    }
    const data = await response.json();
    const dataWithQuantity = data.map((item) => {
      return { ...item, quantity: 0 };
    });
    return dataWithQuantity;
  } catch (err) {
    console.log(err);
  }
}
export async function loader() {
  const items = await getData();

  return { items };
}
