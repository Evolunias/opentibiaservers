import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-ot');
}

export default function WithScreenshotsTibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-ot" />;
}
