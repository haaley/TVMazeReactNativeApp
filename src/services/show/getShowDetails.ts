import api from "../../api";

export const getShowDetails = async (id: number) => api.get<ShowDetails>(`/shows/${id}?embed=episodes`)