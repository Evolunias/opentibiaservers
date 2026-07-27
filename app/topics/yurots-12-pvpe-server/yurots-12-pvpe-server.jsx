import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-pvpe-server');
}

export default function Yurots12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-pvpe-server" />;
}
