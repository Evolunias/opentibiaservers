import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-enforced-server-latin-america');
}

export default function YurotsPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-enforced-server-latin-america" />;
}
