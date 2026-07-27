import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot');
}

export default function WithScreenshotsHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot" />;
}
