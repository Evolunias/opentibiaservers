import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvpe-server-germany');
}

export default function XanteriaPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvpe-server-germany" />;
}
