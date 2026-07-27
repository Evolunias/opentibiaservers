import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-server');
}

export default function WithScreenshotsNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-server" />;
}
