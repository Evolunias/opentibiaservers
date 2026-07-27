import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-0-evo-servers');
}

export default function ZuneraOt80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-0-evo-servers" />;
}
