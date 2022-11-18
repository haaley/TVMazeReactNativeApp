import api from "../../api"

export const searchShow = async (query: string) => api.get<SearchResult[]>(`/search/shows?q=${query}`)