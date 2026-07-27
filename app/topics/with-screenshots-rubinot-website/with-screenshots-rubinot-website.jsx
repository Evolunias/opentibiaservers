import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-website');
}

export default function WithScreenshotsRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-website" />;
}
