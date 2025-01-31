'use client';

import { useEffect } from 'react';

interface AdvertisementProps {
  slot: string;
  className?: string;
}

export default function Advertisement({ slot, className = '' }: AdvertisementProps) {
  useEffect(() => {
    try {
      if (!window.adsbygoogle) {
        window.adsbygoogle = [];
      }
      window.adsbygoogle.push({});
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3489095111043969"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}