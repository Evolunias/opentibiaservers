import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-1-pvp-enforced-server');
}

export default function Yurots81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-1-pvp-enforced-server" />;
}
