import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-guide-europe');
}

export default function WithScreenshotsGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-guide-europe" />;
}
