import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-pvpe-server');
}

export default function Yurots11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-pvpe-server" />;
}
