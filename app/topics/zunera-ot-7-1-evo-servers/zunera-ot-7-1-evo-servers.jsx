import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-1-evo-servers');
}

export default function ZuneraOt71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-1-evo-servers" />;
}
