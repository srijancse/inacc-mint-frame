import { base } from 'viem/chains';
import { getFrameMetadata } from '@coinbase/onchainkit';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const CHAIN = base;
export const CONTRACT_ADDRESS = '0x932648Bd6E7e7Aa04Fe58636a82F62da7539ABFd';
export const TOKEN_ID = 7n; // First collection is 1

export const FRAME_METADATA = getFrameMetadata({
  buttons: ['in-acc mint 007'],
  image: `${SITE_URL}/hawa.jpg`,
  post_url: `${SITE_URL}/api/frame`,
});
