import { Client } from "discord.js-selfbot-v13";

const { Streamer } = await import('@dank074/discord-video-stream');

const client = new Client();
const streamer = new Streamer(client);

await client.login(process.env.TOKEN);
await streamer.joinVoice(1205265436862578780, 1251029660729348156);

const udp = await streamer.createStream();
udp.mediaConnection.setSpeaking(true);
udp.mediaConnection.setVideoStatus(true);

try {
    const res = await streamLivestreamVideo("http://live.adultiptv.net/russian.m3u8", udp);

    console.log("Finished playing video " + res);
} catch (e) {
    console.log(e);
} finally {
    udp.mediaConnection.setSpeaking(false);
    udp.mediaConnection.setVideoStatus(false);
}
