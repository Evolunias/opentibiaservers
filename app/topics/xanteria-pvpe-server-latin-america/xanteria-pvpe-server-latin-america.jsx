import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvpe-server-latin-america');
}

export default function XanteriaPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvpe-server-latin-america" />;
}
