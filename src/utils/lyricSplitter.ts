
export const splitLyrics = (lyrics: string) => {
    const lyricBlocks: string[] = [];
    lyrics.split("\n").forEach((block)=>{
        lyricBlocks.push(block);
    })
    return lyricBlocks;
};