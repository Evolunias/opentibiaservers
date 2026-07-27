import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-open-tibia');
}

export default function WithScreenshotsImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-open-tibia" />;
}
