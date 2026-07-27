import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-list-canada');
}

export default function WithScreenshotsServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-list-canada" />;
}
