import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-pvp-enforced-server');
}

export default function Yurots15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-pvp-enforced-server" />;
}
