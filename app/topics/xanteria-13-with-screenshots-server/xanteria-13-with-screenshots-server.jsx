import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-with-screenshots-server');
}

export default function Xanteria13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-with-screenshots-server" />;
}
