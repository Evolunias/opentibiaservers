import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-infernal-ot-website');
}

export default function WithScreenshotsInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-infernal-ot-website" />;
}
