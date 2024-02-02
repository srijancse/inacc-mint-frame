import { base } from 'viem/chains';
import { getFrameMetadata } from '@coinbase/onchainkit';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const CHAIN = base;
export const CONTRACT_ADDRESS = '0x932648bd6e7e7aa04fe58636a82f62da7539abfd';
export const TOKEN_ID = 3n; // First collection is 1

export const FRAME_METADATA = getFrameMetadata({
  buttons: ['in-acc mint'],
  image: `${SITE_URL}/opengraph-image.jpg`,
  post_url: `${SITE_URL}/api/frame`,
});
