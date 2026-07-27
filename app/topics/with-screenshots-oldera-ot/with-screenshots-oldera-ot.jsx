import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-ot');
}

export default function WithScreenshotsOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-ot" />;
}
