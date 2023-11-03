import Weather_API_KEY from "./apikey";

export const getWeatherFromCoords = async (locationObj) => {
    try {
        const url = buildApiCoordsUrl(locationObj);
        return await getWeatherFromCoords(url);
    } catch (err) {
        console.error(err.stack);
    }
}