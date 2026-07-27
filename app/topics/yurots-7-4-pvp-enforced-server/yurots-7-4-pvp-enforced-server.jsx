import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-4-pvp-enforced-server');
}

export default function Yurots74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-4-pvp-enforced-server" />;
}
