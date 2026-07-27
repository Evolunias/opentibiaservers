import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-screenshots-server-usa');
}

export default function XanteriaWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-screenshots-server-usa" />;
}
