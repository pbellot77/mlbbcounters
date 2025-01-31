declare global {
    interface Window {
      adsbygoogle: Array<{
        [key: string]: unknown;
      }>;
    }
  }
  
  export {};