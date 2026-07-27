import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-enforced-server-north-america');
}

export default function ZuneraOtPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-enforced-server-north-america" />;
}
