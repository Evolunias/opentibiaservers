import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-ots');
}

export default function WithScreenshotsAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-ots" />;
}
