import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-evo-server-north-america');
}

export default function ZuneraOtEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-evo-server-north-america" />;
}
