import {dataset, projectId} from "@/sanity";
import {SanityImageSource} from "@sanity/asset-utils";
import createImageUrlBuilder from '@sanity/image-url'

const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
}

