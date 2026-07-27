import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-evo-servers-brazil');
}

export default function ZuneraOtEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-evo-servers-brazil" />;
}
