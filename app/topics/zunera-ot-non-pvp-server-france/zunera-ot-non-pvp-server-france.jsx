import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-non-pvp-server-france');
}

export default function ZuneraOtNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-non-pvp-server-france" />;
}
