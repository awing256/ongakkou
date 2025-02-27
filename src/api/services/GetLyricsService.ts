import LRCApiClient from '../LRCApiClient';

class GetLyricsService {

    static async getLyricsByTitleAndArtist(title: string, artist: string ) {
        try {
            const params ={
                artist_name: artist,
                track_name: title,
                album_name: null,
                duration: null
            }

            const response = await LRCApiClient.get('get', {params});
            return response.data;
        } catch (error) {
            console.error(`Error fetching song with title ${title} and artist ${artist}:`, error);
            throw error;
        }
    }
}

export default GetLyricsService;