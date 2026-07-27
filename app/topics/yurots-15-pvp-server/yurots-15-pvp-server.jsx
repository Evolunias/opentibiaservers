import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-pvp-server');
}

export default function Yurots15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-pvp-server" />;
}
