import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvpe-server-argentina');
}

export default function XanteriaPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvpe-server-argentina" />;
}
