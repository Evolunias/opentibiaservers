import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot-ot');
}

export default function WithScreenshotsHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot-ot" />;
}
