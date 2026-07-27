import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-screenshots-server-brazil');
}

export default function XanteriaWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-screenshots-server-brazil" />;
}
