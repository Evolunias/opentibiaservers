import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-open-tibia');
}

export default function WithScreenshotsRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-open-tibia" />;
}
