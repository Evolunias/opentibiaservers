import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-website');
}

export default function WithScreenshotsMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-website" />;
}
