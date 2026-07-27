import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-client');
}

export default function WithScreenshotsOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-client" />;
}
