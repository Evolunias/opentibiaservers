import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-open-tibia');
}

export default function WithScreenshotsThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-open-tibia" />;
}
