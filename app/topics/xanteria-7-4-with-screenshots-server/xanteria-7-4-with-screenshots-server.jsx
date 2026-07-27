import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-4-with-screenshots-server');
}

export default function Xanteria74WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-4-with-screenshots-server" />;
}
