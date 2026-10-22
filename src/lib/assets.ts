// Public asset locations. Images are committed under public/ so the Website Builder
// can replace them and every URL persists across deploys.
export const ASSET_PATHS = {
  images: '/assets/img',
  client: '/assets/client',
} as const;

export function assetUrl(fileName: string, folder: keyof typeof ASSET_PATHS = 'images'): string {
  return `${ASSET_PATHS[folder]}/${fileName}`;
}
