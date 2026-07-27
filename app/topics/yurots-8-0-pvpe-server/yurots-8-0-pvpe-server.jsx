import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-0-pvpe-server');
}

export default function Yurots80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-0-pvpe-server" />;
}
