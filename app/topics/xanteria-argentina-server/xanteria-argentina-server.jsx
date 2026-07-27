import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-argentina-server');
}

export default function XanteriaArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-argentina-server" />;
}
