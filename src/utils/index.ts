export const sanitizedText = (text: string) =>
  text.replace(/<\/?[^>]+(>|$)/g, '');

export const groupEpisodesBySeason = (episodes?: Episode[]) => {
  let groupedEpisodes = Object.values(
    episodes?.reduce((acc: any, episode) => {
      if (!acc[episode.season])
        acc[episode.season] = {
          season: episode.season,
          data: [],
        };
      acc[episode.season].data.push(episode);
      return acc;
    }, {}),
  );
  return groupedEpisodes as any[]
};
