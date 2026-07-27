import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-tibia');
}

export default function WithScreenshotsRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-tibia" />;
}
