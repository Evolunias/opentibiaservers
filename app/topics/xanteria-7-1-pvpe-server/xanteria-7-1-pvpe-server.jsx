import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-1-pvpe-server');
}

export default function Xanteria71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-1-pvpe-server" />;
}
