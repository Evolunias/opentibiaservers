import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-pvpe-server');
}

export default function Yurots15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-pvpe-server" />;
}
