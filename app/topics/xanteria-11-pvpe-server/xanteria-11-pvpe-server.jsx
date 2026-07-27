import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-pvpe-server');
}

export default function Xanteria11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-pvpe-server" />;
}
