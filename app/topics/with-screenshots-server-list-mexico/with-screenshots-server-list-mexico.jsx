import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-list-mexico');
}

export default function WithScreenshotsServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-list-mexico" />;
}
