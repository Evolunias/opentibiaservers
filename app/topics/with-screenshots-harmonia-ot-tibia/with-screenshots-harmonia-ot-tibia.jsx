import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot-tibia');
}

export default function WithScreenshotsHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot-tibia" />;
}
