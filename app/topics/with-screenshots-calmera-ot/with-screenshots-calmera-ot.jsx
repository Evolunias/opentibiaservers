import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-calmera-ot');
}

export default function WithScreenshotsCalmeraOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-calmera-ot" />;
}
