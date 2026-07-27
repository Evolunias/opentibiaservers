import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oxygenot-website');
}

export default function WithScreenshotsOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oxygenot-website" />;
}
