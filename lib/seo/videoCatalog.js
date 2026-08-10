import { sanitizeVideoUrlPath } from './videoUrl';

const HERO_VIDEO_ASSETS_RAW = [
  {
    id: 1,
    video: '/video/5389356-coll-wavebreak-warehouse-1920x1080.webm',
    mobileVideo: '/video/Mobile/5389356-coll-wavebreak-warehouse-1920x1080-mobile.webm',
    uploadDate: '2026-05-12T00:00:00+03:00',
    thumbnailPath: '/Traceability.svg',
  },
  {
    id: 2,
    video: '/video/dislidonus.webm',
    mobileVideo: '/video/Mobile/dislidonus-mobile.webm',
    uploadDate: '2026-06-14T00:00:00+03:00',
    thumbnailPath: '/Traceability.svg',
  },
  {
    id: 3,
    video: '/video/5356320-coll-wavebreak-indoors-1920x1080.webm',
    mobileVideo: '/video/Mobile/5356320-coll-wavebreak-indoors-1920x1080-mobile.webm',
    uploadDate: '2026-07-21T00:00:00+03:00',
    thumbnailPath: '/Traceability.svg',
  },
];

export function getHeroVideoAssets() {
  return HERO_VIDEO_ASSETS_RAW.map((asset) => ({
    ...asset,
    video: sanitizeVideoUrlPath(asset.video),
    mobileVideo: sanitizeVideoUrlPath(asset.mobileVideo),
    thumbnailPath: sanitizeVideoUrlPath(asset.thumbnailPath),
  }));
}
