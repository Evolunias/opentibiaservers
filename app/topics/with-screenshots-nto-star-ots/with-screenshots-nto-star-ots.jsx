import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-ots');
}

export default function WithScreenshotsNtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-ots" />;
}
