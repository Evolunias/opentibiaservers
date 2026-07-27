import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-6-pvpe-server');
}

export default function Yurots86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-6-pvpe-server" />;
}
