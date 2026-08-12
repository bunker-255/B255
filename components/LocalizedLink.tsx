import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';

export const LocalizedLink: React.FC<LinkProps> = ({ to, ...props }) => {
  const { language } = useLanguage();
  
  let localizedTo = to;
  if (typeof to === 'string') {
    if (to.startsWith('/')) {
      const cleanPath = to.replace(/^\/(en|ru|he)(\/|$)/, '/');
      localizedTo = `/${language}${cleanPath === '/' ? '' : cleanPath}`;
    }
  } else if (to && to.pathname && to.pathname.startsWith('/')) {
    const cleanPath = to.pathname.replace(/^\/(en|ru|he)(\/|$)/, '/');
    localizedTo = {
      ...to,
      pathname: `/${language}${cleanPath === '/' ? '' : cleanPath}`
    };
  }

  return <RouterLink to={localizedTo} {...props} />;
};
