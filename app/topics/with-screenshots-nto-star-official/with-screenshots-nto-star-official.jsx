import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-official');
}

export default function WithScreenshotsNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-official" />;
}
