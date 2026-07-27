import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-baiak-ilusion-tibia');
}

export default function WithScreenshotsBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-baiak-ilusion-tibia" />;
}
