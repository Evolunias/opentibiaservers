import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvpe-server-mexico');
}

export default function XanteriaPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvpe-server-mexico" />;
}
