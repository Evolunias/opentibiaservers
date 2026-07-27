import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-list-usa');
}

export default function WithScreenshotsServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-list-usa" />;
}
