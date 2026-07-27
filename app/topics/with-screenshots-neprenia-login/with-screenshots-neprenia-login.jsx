import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-login');
}

export default function WithScreenshotsNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-login" />;
}
