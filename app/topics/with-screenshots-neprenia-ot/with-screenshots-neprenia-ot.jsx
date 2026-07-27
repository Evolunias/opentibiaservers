import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-ot');
}

export default function WithScreenshotsNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-ot" />;
}
