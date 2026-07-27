import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-enforced-server-canada');
}

export default function YurotsPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-enforced-server-canada" />;
}
