import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-website');
}

export default function WithScreenshotsCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-website" />;
}
