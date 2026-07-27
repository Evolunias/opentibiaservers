import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-98-pvpe-server');
}

export default function Yurots1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-98-pvpe-server" />;
}
