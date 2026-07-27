import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rookgaard-tales-server');
}

export default function WithScreenshotsRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rookgaard-tales-server" />;
}
