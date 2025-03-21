
// This file manages redirects from old URLs to new URLs

// Map of old paths to new paths
export const redirectMap: Record<string, string> = {
  "/produtos": "/",
  "/servicos": "/",
  "/sobre": "/",
  "/contato": "/",
  "/exames-de-vista": "/",
  "/armacoes": "/",
  "/lentes": "/",
  "/nossa-loja": "/",
  "/localizacao": "/",
  "/atendimento": "/",
};

/**
 * Check if a path should be redirected and return the new path
 * @param path Current path to check
 * @returns New path if redirect exists, or null if no redirect needed
 */
export const getRedirectPath = (path: string): string | null => {
  // Remove trailing slash for consistency
  const normalizedPath = path.endsWith("/") ? path.slice(0, -1) : path;
  
  // Check exact matches first
  if (redirectMap[normalizedPath]) {
    return redirectMap[normalizedPath];
  }
  
  // Check for partial matches (for URLs with query parameters or additional path segments)
  for (const oldPath of Object.keys(redirectMap)) {
    if (normalizedPath.startsWith(oldPath + "/") || normalizedPath.startsWith(oldPath + "?")) {
      return redirectMap[oldPath];
    }
  }
  
  return null;
};
