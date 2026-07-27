import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-list-uk');
}

export default function WithScreenshotsServerListUkKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-list-uk" />;
}
