import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-tibia');
}

export default function WithScreenshotsTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-tibia" />;
}
