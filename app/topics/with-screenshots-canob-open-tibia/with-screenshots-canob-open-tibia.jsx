import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-open-tibia');
}

export default function WithScreenshotsCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-open-tibia" />;
}
