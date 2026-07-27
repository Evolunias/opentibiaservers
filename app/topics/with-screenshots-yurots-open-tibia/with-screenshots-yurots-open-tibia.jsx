import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-open-tibia');
}

export default function WithScreenshotsYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-open-tibia" />;
}
