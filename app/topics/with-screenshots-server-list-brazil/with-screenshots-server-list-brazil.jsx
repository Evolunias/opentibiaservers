import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-list-brazil');
}

export default function WithScreenshotsServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-list-brazil" />;
}
