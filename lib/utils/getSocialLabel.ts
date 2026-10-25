export const getSocialLabel = (link: string): string => {
  try {
    const host = new URL(link).hostname.replace(/^www\./, '');
    return host.split('.')[0] ?? 'Social media';
  } catch {
    return 'Social media';
  }
};
