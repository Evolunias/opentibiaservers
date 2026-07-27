import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oxygenot-open-tibia');
}

export default function WithScreenshotsOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oxygenot-open-tibia" />;
}
