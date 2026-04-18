import type * as get_sources_types from "@plugin_provider/global/types/get_sources";


export default async function get_sources(input_payload: get_sources_types.InputPayload): Promise<get_sources_types.OutputPayload> {

    return [
        {
            id: input_payload.id,
            title: `${input_payload.title}`
        }
    ];
}