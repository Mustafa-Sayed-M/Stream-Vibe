const baseApi = import.meta.env.VITE_TMDB_API;

const commonOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_AUTH_TOKEN}`
    }
};

const fetchData = async (endpoint, options = {}) => {
    try {
        const response = await fetch(`${baseApi}${endpoint}`, { ...commonOptions, ...options });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const DISCOVER_MEDIA = async (mediaType = "movie") => {
    return await fetchData(`/discover/${mediaType}`);
};
export const GET_TRENDING_MEDIA = async (mediaType = "movie", trendingTime = "day") => {
    return await fetchData(`/trending/${mediaType}/${trendingTime}`);
};
export const GET_MEDIA_LIST = async (mediaType = "movie", listType = "popular") => {
    return await fetchData(`/${mediaType}/${listType}`);
};
export const GET_MEDIA_DETAIL = async (mediaType = "movie", mediaId = 1) => {
    return await fetchData(`/${mediaType}/${mediaId}`);
};
export const GET_MEDIA_REVIEWS = async (mediaType = "movie", mediaId = 1) => {
    return await fetchData(`/${mediaType}/${mediaId}/reviews`);
};
export const GET_SEASON_DETAIL = async (showId = 1, seasonNumber = 1) => {
    return await fetchData(`/tv/${showId}/season/${seasonNumber}`);
};