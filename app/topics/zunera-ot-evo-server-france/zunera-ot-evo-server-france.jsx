import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-evo-server-france');
}

export default function ZuneraOtEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-evo-server-france" />;
}
