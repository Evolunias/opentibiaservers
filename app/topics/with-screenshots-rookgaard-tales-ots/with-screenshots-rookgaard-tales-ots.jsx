import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rookgaard-tales-ots');
}

export default function WithScreenshotsRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rookgaard-tales-ots" />;
}
