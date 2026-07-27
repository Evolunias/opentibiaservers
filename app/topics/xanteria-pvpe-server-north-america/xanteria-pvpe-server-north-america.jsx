import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvpe-server-north-america');
}

export default function XanteriaPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvpe-server-north-america" />;
}
