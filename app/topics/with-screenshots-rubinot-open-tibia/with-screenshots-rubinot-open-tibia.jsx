import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-open-tibia');
}

export default function WithScreenshotsRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-open-tibia" />;
}
