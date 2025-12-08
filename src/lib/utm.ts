// UTM Tracking Utility for Ad Campaigns
// Use these functions to generate trackable links for Facebook, Google, TikTok ads

export interface UTMParams {
  source: 'facebook' | 'google' | 'tiktok' | 'instagram' | 'email' | 'direct';
  medium: 'cpc' | 'social' | 'email' | 'banner' | 'video' | 'organic';
  campaign: string;
  content?: string;
  term?: string;
}

export const generateUTMLink = (baseUrl: string, params: UTMParams): string => {
  const url = new URL(baseUrl, window.location.origin);
  
  url.searchParams.set('utm_source', params.source);
  url.searchParams.set('utm_medium', params.medium);
  url.searchParams.set('utm_campaign', params.campaign);
  
  if (params.content) {
    url.searchParams.set('utm_content', params.content);
  }
  
  if (params.term) {
    url.searchParams.set('utm_term', params.term);
  }
  
  return url.toString();
};

// Pre-built ad link generators
export const adLinks = {
  // Facebook Ads
  facebook: {
    homepage: (campaign: string) => generateUTMLink('/', {
      source: 'facebook',
      medium: 'cpc',
      campaign,
    }),
    product: (handle: string, campaign: string) => generateUTMLink(`/product/${handle}`, {
      source: 'facebook',
      medium: 'cpc',
      campaign,
      content: handle,
    }),
  },
  
  // Google Ads
  google: {
    homepage: (campaign: string) => generateUTMLink('/', {
      source: 'google',
      medium: 'cpc',
      campaign,
    }),
    product: (handle: string, campaign: string, keyword?: string) => generateUTMLink(`/product/${handle}`, {
      source: 'google',
      medium: 'cpc',
      campaign,
      content: handle,
      term: keyword,
    }),
  },
  
  // TikTok Ads
  tiktok: {
    homepage: (campaign: string) => generateUTMLink('/', {
      source: 'tiktok',
      medium: 'video',
      campaign,
    }),
    product: (handle: string, campaign: string) => generateUTMLink(`/product/${handle}`, {
      source: 'tiktok',
      medium: 'video',
      campaign,
      content: handle,
    }),
  },
  
  // Instagram Ads
  instagram: {
    homepage: (campaign: string) => generateUTMLink('/', {
      source: 'instagram',
      medium: 'social',
      campaign,
    }),
    product: (handle: string, campaign: string) => generateUTMLink(`/product/${handle}`, {
      source: 'instagram',
      medium: 'social',
      campaign,
      content: handle,
    }),
  },
};

// Track UTM parameters on page load
export const trackUTMVisit = (): void => {
  const params = new URLSearchParams(window.location.search);
  
  const utmData = {
    source: params.get('utm_source'),
    medium: params.get('utm_medium'),
    campaign: params.get('utm_campaign'),
    content: params.get('utm_content'),
    term: params.get('utm_term'),
    timestamp: new Date().toISOString(),
    page: window.location.pathname,
  };
  
  // Only store if UTM params exist
  if (utmData.source || utmData.campaign) {
    localStorage.setItem('utm_data', JSON.stringify(utmData));
    console.log('UTM Visit tracked:', utmData);
  }
};

// Get stored UTM data (useful for checkout/conversion tracking)
export const getStoredUTM = (): Record<string, string | null> | null => {
  const stored = localStorage.getItem('utm_data');
  return stored ? JSON.parse(stored) : null;
};

// Example ad URLs for your campaigns:
// 
// FACEBOOK ADS:
// Homepage: ?utm_source=facebook&utm_medium=cpc&utm_campaign=summer_sale
// Product:  /product/rgb-led-strip-lights?utm_source=facebook&utm_medium=cpc&utm_campaign=led_strips&utm_content=rgb-led-strip-lights
//
// GOOGLE ADS:
// Homepage: ?utm_source=google&utm_medium=cpc&utm_campaign=brand_awareness
// Product:  /product/smart-led-bulb?utm_source=google&utm_medium=cpc&utm_campaign=smart_bulbs&utm_term=smart+led+bulb
//
// TIKTOK ADS:
// Homepage: ?utm_source=tiktok&utm_medium=video&utm_campaign=viral_room_glow
// Product:  /product/galaxy-star-projector-night-light?utm_source=tiktok&utm_medium=video&utm_campaign=projector_promo
