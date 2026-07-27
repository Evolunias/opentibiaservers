import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-with-screenshots-server');
}

export default function Xanteria11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-with-screenshots-server" />;
}
