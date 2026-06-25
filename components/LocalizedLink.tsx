import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';

export const LocalizedLink: React.FC<LinkProps> = ({ to, ...props }) => {
  const { language } = useLanguage();
  
  let localizedTo = to;
  if (typeof to === 'string') {
    if (to.startsWith('/')) {
      localizedTo = `/${language}${to === '/' ? '' : to}`;
    }
  } else if (to && to.pathname && to.pathname.startsWith('/')) {
    localizedTo = {
      ...to,
      pathname: `/${language}${to.pathname === '/' ? '' : to.pathname}`
    };
  }

  return <RouterLink to={localizedTo} {...props} />;
};
