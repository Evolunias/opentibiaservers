import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-6-evo-servers');
}

export default function ZuneraOt86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-6-evo-servers" />;
}
