import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-pvpe-server');
}

export default function Yurots13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-pvpe-server" />;
}
