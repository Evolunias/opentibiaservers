import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-status-usa');
}

export default function WithScreenshotsStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-status-usa" />;
}
