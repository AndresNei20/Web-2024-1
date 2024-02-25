export const fetchData = async(url) => {
    try {
        const response = fetch(url);
        return await response.json()
    } catch (error) {
        throw new error ('Error fetching Data')
    }
}