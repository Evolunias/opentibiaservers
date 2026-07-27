import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvpe-server-brazil');
}

export default function XanteriaPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvpe-server-brazil" />;
}
