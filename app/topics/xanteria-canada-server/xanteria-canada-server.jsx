import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-canada-server');
}

export default function XanteriaCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-canada-server" />;
}
