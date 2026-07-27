import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-open-tibia');
}

export default function WithScreenshotsCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-open-tibia" />;
}
