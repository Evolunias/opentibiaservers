import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-enforced-server-sweden');
}

export default function YurotsPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-enforced-server-sweden" />;
}
