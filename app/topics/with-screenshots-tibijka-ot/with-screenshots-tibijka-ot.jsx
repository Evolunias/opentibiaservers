import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-ot');
}

export default function WithScreenshotsTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-ot" />;
}
