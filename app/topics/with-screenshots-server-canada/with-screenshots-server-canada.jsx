import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-canada');
}

export default function WithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-canada" />;
}
