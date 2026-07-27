import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-pvpe-server');
}

export default function Xanteria12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-pvpe-server" />;
}
