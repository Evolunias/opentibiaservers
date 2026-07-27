import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eternal-odyssey-tibia');
}

export default function WithScreenshotsEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eternal-odyssey-tibia" />;
}
