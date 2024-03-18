export const saveStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
}