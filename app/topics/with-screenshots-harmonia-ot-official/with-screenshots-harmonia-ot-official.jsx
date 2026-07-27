import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot-official');
}

export default function WithScreenshotsHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot-official" />;
}
