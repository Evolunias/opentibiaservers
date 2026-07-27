import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-register');
}

export default function WithScreenshotsRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-register" />;
}
