import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-client');
}

export default function WithScreenshotsNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-client" />;
}
