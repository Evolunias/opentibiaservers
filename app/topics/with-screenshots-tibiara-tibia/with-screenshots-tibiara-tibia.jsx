import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-tibia');
}

export default function WithScreenshotsTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-tibia" />;
}
