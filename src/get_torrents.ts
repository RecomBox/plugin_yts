import type * as get_torrents_types from "@plugin_provider/global/types/get_torrents";

import request from "@plugin_provider/method/request";

export default async function get_torrents(input_payload: get_torrents_types.InputPayload): Promise<get_torrents_types.OutputPayload> {

    let new_output_payload: get_torrents_types.OutputPayload = [];

    let url = `https://movies-api.accel.li/api/v2/movie_details.json?imdb_id=${input_payload.id}`

    let res = await new request({
        url,
        method: "get"
    }).send();

    let data = res.body_json();

    let slug:String = data.data.movie.slug||"";

    let torrent_list = data?.data?.movie?.torrents||[];
    

    torrent_list.sort((a:any, b:any) => parseInt(b.seeds||0) - parseInt(a.seeds||0));

    for (const torrent of torrent_list){
        new_output_payload.push({
            title: `${slug} ${torrent.quality} ${torrent.type} ${torrent.video_codec}${torrent.is_repack?" Repacked":""} [seeds: ${torrent.seeds}]`,
            torrent_url: torrent.url
        })
    }

    console.log(new_output_payload);
    

    return new_output_payload;
}