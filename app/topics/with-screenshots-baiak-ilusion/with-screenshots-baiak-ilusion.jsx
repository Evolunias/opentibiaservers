import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-baiak-ilusion');
}

export default function WithScreenshotsBaiakIlusionKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-baiak-ilusion" />;
}
