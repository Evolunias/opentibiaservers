import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-brazil');
}

export default function WithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-brazil" />;
}
