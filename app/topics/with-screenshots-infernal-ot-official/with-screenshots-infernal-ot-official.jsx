import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-infernal-ot-official');
}

export default function WithScreenshotsInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-infernal-ot-official" />;
}
