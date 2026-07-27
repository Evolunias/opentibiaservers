import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-login');
}

export default function WithScreenshotsRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-login" />;
}
