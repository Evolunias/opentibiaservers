import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot-server');
}

export default function WithScreenshotsHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot-server" />;
}
