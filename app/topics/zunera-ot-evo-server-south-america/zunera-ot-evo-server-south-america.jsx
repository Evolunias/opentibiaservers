import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-evo-server-south-america');
}

export default function ZuneraOtEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-evo-server-south-america" />;
}
