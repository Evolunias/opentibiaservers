import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-pvp-enforced-server');
}

export default function Yurots12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-pvp-enforced-server" />;
}
