import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rookgaard-tales-official');
}

export default function WithScreenshotsRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rookgaard-tales-official" />;
}
