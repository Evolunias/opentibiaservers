import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-pvpe-server');
}

export default function Yurots14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-pvpe-server" />;
}
