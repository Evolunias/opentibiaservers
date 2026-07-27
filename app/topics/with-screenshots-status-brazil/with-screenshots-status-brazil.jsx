import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-status-brazil');
}

export default function WithScreenshotsStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-status-brazil" />;
}
