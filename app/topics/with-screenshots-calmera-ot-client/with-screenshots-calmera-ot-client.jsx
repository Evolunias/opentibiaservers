import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-calmera-ot-client');
}

export default function WithScreenshotsCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-calmera-ot-client" />;
}
