import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-open-tibia');
}

export default function WithScreenshotsTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-open-tibia" />;
}
