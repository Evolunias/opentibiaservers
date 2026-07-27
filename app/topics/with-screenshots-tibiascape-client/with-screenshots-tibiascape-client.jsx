import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-client');
}

export default function WithScreenshotsTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-client" />;
}
