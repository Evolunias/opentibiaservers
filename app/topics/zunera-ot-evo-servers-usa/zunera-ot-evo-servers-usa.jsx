import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-evo-servers-usa');
}

export default function ZuneraOtEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-evo-servers-usa" />;
}
