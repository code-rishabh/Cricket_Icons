import { useEffect } from 'react';

const AppRedirect = () => {
  useEffect(() => {
    // Replace this URL with your actual Play Store app link
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.cricketicons.cricket_icons_app";
    window.location.replace(playStoreUrl);
  }, []);
  
  return null; // No UI needed as we're redirecting
};

export default AppRedirect;
