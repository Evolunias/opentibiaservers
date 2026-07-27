import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-ot-server');
}

export default function WithScreenshotsThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-ot-server" />;
}
