import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-screenshots-server-argentina');
}

export default function XanteriaWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-screenshots-server-argentina" />;
}
