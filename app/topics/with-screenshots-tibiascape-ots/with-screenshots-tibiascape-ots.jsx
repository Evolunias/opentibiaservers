import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-ots');
}

export default function WithScreenshotsTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-ots" />;
}
