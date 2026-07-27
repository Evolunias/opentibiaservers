import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-register');
}

export default function WithScreenshotsRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-register" />;
}
