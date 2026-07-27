import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-evo-server');
}

export default function ZuneraOt14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-evo-server" />;
}
