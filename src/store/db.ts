export function addDB(product) {
    const storage = JSON.parse(localStorage.getItem('cart') || '[]');
    const findPd = storage.find(i => i.name == product.name);
    if (!findPd) {
        product.quantity = 1;
        const added = [...storage, product];
        localStorage.setItem('cart', JSON.stringify(added));
        return added;
    } else {
        const filter = storage.filter(i => i.name != product.name);
        findPd.quantity = findPd.quantity + 1;
        const added = [...filter, findPd];
        localStorage.setItem('cart', JSON.stringify(added));
        return added;
    }

}
export function getDB() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}
export function clearDB() {
    localStorage.removeItem('cart');
}
export function deleteDB(product) {
    const storage = JSON.parse(localStorage.getItem('cart') || '[]');
    const delted = storage.filter(i => i.itemCode !== product.itemCode);
    localStorage.setItem('cart', JSON.stringify(delted));
}
