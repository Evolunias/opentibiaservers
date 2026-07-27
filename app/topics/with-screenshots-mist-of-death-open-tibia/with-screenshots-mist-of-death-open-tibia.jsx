import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-mist-of-death-open-tibia');
}

export default function WithScreenshotsMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-mist-of-death-open-tibia" />;
}
