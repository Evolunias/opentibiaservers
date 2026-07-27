import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-ot-server');
}

export default function WithScreenshotsTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-ot-server" />;
}
