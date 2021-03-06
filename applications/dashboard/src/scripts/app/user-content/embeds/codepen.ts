/**
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license https://opensource.org/licenses/GPL-2.0 GPL-2.0
 */

import { registerEmbed, IEmbedData, IEmbedElements } from "@dashboard/embeds";

registerEmbed("codepen", codePenRenderer);

/**
 * Renders codepen embeds.
 */
export async function codePenRenderer(elements: IEmbedElements, data: IEmbedData) {
    const contentElement = elements.content;
    const height = data.height || 300;
    const iframe = document.createElement("iframe");
    iframe.setAttribute("id", data.attributes.id);
    iframe.setAttribute("src", data.attributes.embedUrl);
    iframe.setAttribute("height", height.toString());
    iframe.style.width = data.attributes.style.width;
    iframe.style.overflow = data.attributes.style.overflow;
    iframe.setAttribute("scrolling", "no");

    contentElement.appendChild(iframe);
}
