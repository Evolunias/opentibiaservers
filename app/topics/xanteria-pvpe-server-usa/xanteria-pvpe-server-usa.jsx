import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvpe-server-usa');
}

export default function XanteriaPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvpe-server-usa" />;
}
