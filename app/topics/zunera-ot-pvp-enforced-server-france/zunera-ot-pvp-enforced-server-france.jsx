import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-enforced-server-france');
}

export default function ZuneraOtPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-enforced-server-france" />;
}
