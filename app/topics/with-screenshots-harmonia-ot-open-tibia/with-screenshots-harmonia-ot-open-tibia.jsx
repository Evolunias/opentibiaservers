import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot-open-tibia');
}

export default function WithScreenshotsHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot-open-tibia" />;
}
