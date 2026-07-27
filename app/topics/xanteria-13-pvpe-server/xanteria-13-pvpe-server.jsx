import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-pvpe-server');
}

export default function Xanteria13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-pvpe-server" />;
}
