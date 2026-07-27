import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-calmera-ot-website');
}

export default function WithScreenshotsCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-calmera-ot-website" />;
}
