import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-0-pvpe-server');
}

export default function Yurots100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-0-pvpe-server" />;
}
