import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot-website');
}

export default function WithScreenshotsCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot-website" />;
}
