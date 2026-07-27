import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-login');
}

export default function WithScreenshotsTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-login" />;
}
