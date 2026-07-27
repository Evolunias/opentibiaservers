import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-pvpe-server');
}

export default function Xanteria15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-pvpe-server" />;
}
