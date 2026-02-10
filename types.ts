
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
