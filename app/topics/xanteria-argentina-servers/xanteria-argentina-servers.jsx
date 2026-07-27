import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-argentina-servers');
}

export default function XanteriaArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-argentina-servers" />;
}
