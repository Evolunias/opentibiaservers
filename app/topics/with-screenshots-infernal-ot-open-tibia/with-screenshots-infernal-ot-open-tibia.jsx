import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-infernal-ot-open-tibia');
}

export default function WithScreenshotsInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-infernal-ot-open-tibia" />;
}
