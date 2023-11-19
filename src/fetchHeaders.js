async function getData(url, headers=null){
    const setHeaders = new Headers();
    headers.forEach((header) => {
        const [key, value] = header
        setHeaders.append(key, value)
    })
    const response = await fetch(url,{
        headers: setHeaders
    })
}

getData('https://rapidapi.com/guides/request-headers-fetch', [
    ["X-RapidAPI-Key", "your-rapidapi-key"],
    ["X-RapidAPI-Host", "famous-quotes4.p.rapidapi.com"]
])