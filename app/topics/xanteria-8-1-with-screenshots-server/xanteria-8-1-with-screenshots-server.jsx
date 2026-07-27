import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-1-with-screenshots-server');
}

export default function Xanteria81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-1-with-screenshots-server" />;
}
