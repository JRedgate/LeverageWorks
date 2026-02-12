
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

export interface UseCaseProps {
  id: string;
  industry: string;
  title: string;
  context: string;
  findings: string[];
  results: string[];
  roi: string;
  expandedStory: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
