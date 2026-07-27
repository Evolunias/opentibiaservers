import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-status-north-america');
}

export default function WithScreenshotsStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-status-north-america" />;
}
