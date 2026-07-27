import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvpe-server-canada');
}

export default function XanteriaPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvpe-server-canada" />;
}
