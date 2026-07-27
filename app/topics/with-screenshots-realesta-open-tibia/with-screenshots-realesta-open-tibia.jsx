import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-open-tibia');
}

export default function WithScreenshotsRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-open-tibia" />;
}
