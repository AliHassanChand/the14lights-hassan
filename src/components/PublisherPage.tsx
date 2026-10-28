import React from 'react';
import { PageView } from '../types';
import { NewsletterPage } from './NewsletterPage';

export interface PublisherPageProps {
  onNavigate: (view: PageView, articleOrGameId?: string) => void;
}

export const PublisherPage: React.FC<PublisherPageProps> = (props) => {
  return <NewsletterPage {...props} />;
};

export default PublisherPage;
