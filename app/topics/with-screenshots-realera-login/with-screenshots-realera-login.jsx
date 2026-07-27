import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-login');
}

export default function WithScreenshotsRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-login" />;
}
