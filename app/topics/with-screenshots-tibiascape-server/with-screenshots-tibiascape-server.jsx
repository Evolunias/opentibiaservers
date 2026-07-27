import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-server');
}

export default function WithScreenshotsTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-server" />;
}
