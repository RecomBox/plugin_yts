import { describe, it, expect } from "vitest";

import { get_sources, get_torrents } from "./src/plugin";


// describe("get_sources", () => {
//     it("should fetch sources", async () => {
//         let result = await get_sources({
//             id: "tt0145487",
//             title: "SpiderMan",
//             title_secondary: "test",
//             source: "tv",
//             season: 1,
//             episode: 1,
//             search: "",
//             page: 1
//         });

//         console.log(result);
//     });
// });

describe("get_torrents", () => {
    it("should fetch sources", async () => {
        let result = await get_torrents({
            id: "tt0145487",
            source: "movies",
            page: 1
        })

        console.log(result);
    });
});

