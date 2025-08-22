/**
 * Utility function to proxy external images through our server to avoid CORS issues
 */

export const proxyImage = (url) => {
  if (!url) return '';
  
  // If it's already a relative URL (our proxy or local path), return as is
  if (url.startsWith('/')) {
    return url;
  }
  
  // Otherwise, proxy the external URL
  return `/api/image-proxy?url=${encodeURIComponent(url)}`;
};