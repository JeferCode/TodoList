export function save(element, key) {
    localStorage.setItem(key, JSON.stringify(element));
}

