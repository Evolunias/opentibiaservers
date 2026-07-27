import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaorigins-website');
}

export default function WithScreenshotsTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaorigins-website" />;
}
