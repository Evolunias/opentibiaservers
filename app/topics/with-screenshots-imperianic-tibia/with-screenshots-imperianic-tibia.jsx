import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-tibia');
}

export default function WithScreenshotsImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-tibia" />;
}
