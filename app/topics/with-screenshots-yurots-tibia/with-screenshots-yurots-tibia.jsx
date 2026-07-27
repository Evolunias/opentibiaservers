import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-tibia');
}

export default function WithScreenshotsYurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-tibia" />;
}
