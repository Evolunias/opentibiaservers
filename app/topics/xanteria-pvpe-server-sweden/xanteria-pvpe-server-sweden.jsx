import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvpe-server-sweden');
}

export default function XanteriaPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvpe-server-sweden" />;
}
