import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-calmera-ot-ots');
}

export default function WithScreenshotsCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-calmera-ot-ots" />;
}
