import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-ot-server');
}

export default function WithScreenshotsTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-ot-server" />;
}
