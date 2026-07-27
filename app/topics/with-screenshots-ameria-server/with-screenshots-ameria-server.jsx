import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-server');
}

export default function WithScreenshotsAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-server" />;
}
