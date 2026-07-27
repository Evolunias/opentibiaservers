import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-open-tibia');
}

export default function WithScreenshotsNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-open-tibia" />;
}
