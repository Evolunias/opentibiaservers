import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-list-sweden');
}

export default function WithScreenshotsServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-list-sweden" />;
}
