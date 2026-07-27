import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-status-uk');
}

export default function WithScreenshotsStatusUkKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-status-uk" />;
}
