import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-client');
}

export default function WithScreenshotsAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-client" />;
}
