import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot');
}

export default function WithScreenshotsRubinotKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot" />;
}
