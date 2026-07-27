import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-pvp-enforced-server');
}

export default function Yurots14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-pvp-enforced-server" />;
}
