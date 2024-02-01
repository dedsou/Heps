import { Client } from "discord.js-selfbot-v13";
import { Streamer } from '@dank074/discord-video-stream';

const streamer = new Streamer(new Client());
await streamer.client.login(process.env.TOKEN);
await streamer.joinVoice(1152279443428081756, 1195770021746573422);

const udp = await streamer.createStream();
udp.mediaConnection.setSpeaking(true);
udp.mediaConnection.setVideoStatus(true);
try {
    const res = await streamLivestreamVideo("http://78.47.224.234/puretaboo/index.m3u8", udp);

    console.log("Finished playing video " + res);
} catch (e) {
    console.log(e);
} finally {
    udp.mediaConnection.setSpeaking(false);
    udp.mediaConnection.setVideoStatus(false);
}
