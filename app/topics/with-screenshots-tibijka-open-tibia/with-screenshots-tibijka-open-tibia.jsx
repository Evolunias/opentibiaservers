import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-open-tibia');
}

export default function WithScreenshotsTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-open-tibia" />;
}
