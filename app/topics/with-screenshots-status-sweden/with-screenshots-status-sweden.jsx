import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-status-sweden');
}

export default function WithScreenshotsStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-status-sweden" />;
}
