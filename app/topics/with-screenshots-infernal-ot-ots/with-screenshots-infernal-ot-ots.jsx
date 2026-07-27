import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-infernal-ot-ots');
}

export default function WithScreenshotsInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-infernal-ot-ots" />;
}
