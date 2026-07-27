import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-4-pvpe-server');
}

export default function Yurots84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-4-pvpe-server" />;
}
