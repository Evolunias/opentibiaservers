import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oxygenot-tibia');
}

export default function WithScreenshotsOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oxygenot-tibia" />;
}
