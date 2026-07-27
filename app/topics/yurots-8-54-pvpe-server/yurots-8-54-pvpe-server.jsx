import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-54-pvpe-server');
}

export default function Yurots854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-54-pvpe-server" />;
}
