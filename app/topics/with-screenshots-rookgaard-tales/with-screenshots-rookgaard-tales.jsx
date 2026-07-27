import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rookgaard-tales');
}

export default function WithScreenshotsRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rookgaard-tales" />;
}
