import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-list-europe');
}

export default function WithScreenshotsServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-list-europe" />;
}
