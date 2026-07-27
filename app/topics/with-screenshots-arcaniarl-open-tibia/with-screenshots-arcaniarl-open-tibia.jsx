import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-arcaniarl-open-tibia');
}

export default function WithScreenshotsArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-arcaniarl-open-tibia" />;
}
