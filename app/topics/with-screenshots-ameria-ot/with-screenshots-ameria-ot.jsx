import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-ot');
}

export default function WithScreenshotsAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-ot" />;
}
