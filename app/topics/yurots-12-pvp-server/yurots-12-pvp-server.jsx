import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-pvp-server');
}

export default function Yurots12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-pvp-server" />;
}
