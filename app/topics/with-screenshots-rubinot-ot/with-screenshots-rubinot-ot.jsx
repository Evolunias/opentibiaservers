import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-ot');
}

export default function WithScreenshotsRubinotOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-ot" />;
}
