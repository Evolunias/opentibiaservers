import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-status-argentina');
}

export default function WithScreenshotsStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-status-argentina" />;
}
