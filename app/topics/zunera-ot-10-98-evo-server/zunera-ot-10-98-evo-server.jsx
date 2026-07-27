import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-10-98-evo-server');
}

export default function ZuneraOt1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-10-98-evo-server" />;
}
