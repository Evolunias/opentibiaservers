import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-tibia');
}

export default function WithScreenshotsNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-tibia" />;
}
