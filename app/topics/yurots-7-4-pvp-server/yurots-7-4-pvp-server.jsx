import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-4-pvp-server');
}

export default function Yurots74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-4-pvp-server" />;
}
