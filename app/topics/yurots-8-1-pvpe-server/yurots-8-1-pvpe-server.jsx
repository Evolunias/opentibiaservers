import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-1-pvpe-server');
}

export default function Yurots81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-1-pvpe-server" />;
}
