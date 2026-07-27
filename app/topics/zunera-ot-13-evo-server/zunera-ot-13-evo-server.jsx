import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-13-evo-server');
}

export default function ZuneraOt13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-13-evo-server" />;
}
