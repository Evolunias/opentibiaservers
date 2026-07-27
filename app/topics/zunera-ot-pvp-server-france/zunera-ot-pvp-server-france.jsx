import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-server-france');
}

export default function ZuneraOtPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-server-france" />;
}
