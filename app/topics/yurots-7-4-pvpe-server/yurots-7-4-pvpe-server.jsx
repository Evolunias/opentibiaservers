import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-4-pvpe-server');
}

export default function Yurots74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-4-pvpe-server" />;
}
