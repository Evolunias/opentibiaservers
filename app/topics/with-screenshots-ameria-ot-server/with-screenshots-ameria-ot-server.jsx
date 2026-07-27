import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-ot-server');
}

export default function WithScreenshotsAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-ot-server" />;
}
