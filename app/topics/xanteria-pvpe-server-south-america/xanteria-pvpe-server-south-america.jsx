import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvpe-server-south-america');
}

export default function XanteriaPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvpe-server-south-america" />;
}
