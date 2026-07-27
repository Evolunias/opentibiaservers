import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-list-argentina');
}

export default function WithScreenshotsServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-list-argentina" />;
}
