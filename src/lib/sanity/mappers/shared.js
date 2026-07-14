export const mapImage = (image) => image?.asset ? {asset: image.asset, alt: image.decorative ? '' : image.alt || null, decorative: Boolean(image.decorative)} : null
export const mapSeo = (seo) => seo ? {title: seo.title || null, description: seo.description || null, socialImage: mapImage(seo.socialImage)} : null
export const mapReferenceList = (items, mapper = (item) => item) => Array.isArray(items) ? items.filter(Boolean).map(mapper) : []
