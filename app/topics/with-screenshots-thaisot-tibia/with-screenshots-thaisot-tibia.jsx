import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-tibia');
}

export default function WithScreenshotsThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-tibia" />;
}
