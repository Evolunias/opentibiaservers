import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classick-drakoria-open-tibia');
}

export default function WithScreenshotsClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classick-drakoria-open-tibia" />;
}
