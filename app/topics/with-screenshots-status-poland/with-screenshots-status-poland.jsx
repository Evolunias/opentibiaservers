import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-status-poland');
}

export default function WithScreenshotsStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-status-poland" />;
}
