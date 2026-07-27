import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-infernal-ot');
}

export default function WithScreenshotsInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-infernal-ot" />;
}
