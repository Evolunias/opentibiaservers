import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia');
}

export default function WithScreenshotsNepreniaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia" />;
}
