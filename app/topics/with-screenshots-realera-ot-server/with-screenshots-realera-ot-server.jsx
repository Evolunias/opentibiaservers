import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-ot-server');
}

export default function WithScreenshotsRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-ot-server" />;
}
