import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-status-south-america');
}

export default function WithScreenshotsStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-status-south-america" />;
}
