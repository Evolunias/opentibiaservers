import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-germany-server');
}

export default function XanteriaGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-germany-server" />;
}
