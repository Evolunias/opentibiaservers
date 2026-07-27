import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-status-europe');
}

export default function WithScreenshotsStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-status-europe" />;
}
