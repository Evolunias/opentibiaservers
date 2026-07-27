import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot-website');
}

export default function WithScreenshotsHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot-website" />;
}
