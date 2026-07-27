import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-calmera-ot-open-tibia');
}

export default function WithScreenshotsCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-calmera-ot-open-tibia" />;
}
