import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-evo-servers');
}

export default function ZuneraOt11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-evo-servers" />;
}
