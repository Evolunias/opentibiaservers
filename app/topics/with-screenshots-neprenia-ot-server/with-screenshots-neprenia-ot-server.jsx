import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-ot-server');
}

export default function WithScreenshotsNepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-ot-server" />;
}
