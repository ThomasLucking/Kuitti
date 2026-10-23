
export const sendData = async() => {
    const response = await fetch('/health')
    if(!response.ok) throw new Error('failed to fetch data')
    return response.json()
}