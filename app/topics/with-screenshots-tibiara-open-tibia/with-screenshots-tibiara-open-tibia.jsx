import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-open-tibia');
}

export default function WithScreenshotsTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-open-tibia" />;
}
