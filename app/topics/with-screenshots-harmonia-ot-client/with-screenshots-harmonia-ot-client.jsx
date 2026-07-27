import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot-client');
}

export default function WithScreenshotsHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot-client" />;
}
