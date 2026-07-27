import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-status-germany');
}

export default function WithScreenshotsStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-status-germany" />;
}
