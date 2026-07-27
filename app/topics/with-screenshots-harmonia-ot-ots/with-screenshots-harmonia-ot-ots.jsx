import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot-ots');
}

export default function WithScreenshotsHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot-ots" />;
}
