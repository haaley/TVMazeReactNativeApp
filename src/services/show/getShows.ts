import api from "../../api";

export const getShows = async (page?: number) => api.get<Show[]>(`/shows?page=${page}`)