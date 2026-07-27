import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera');
}

export default function WithScreenshotsOlderaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera" />;
}
