import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-15-evo-servers');
}

export default function ZuneraOt15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-15-evo-servers" />;
}
