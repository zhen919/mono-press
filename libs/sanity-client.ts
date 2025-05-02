import {createClient} from "next-sanity";
import {apiVersion, dataset, projectId} from "@/sanity";

export const client = createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: apiVersion,
    useCdn: true,
    ignoreBrowserTokenWarning: true,
});
