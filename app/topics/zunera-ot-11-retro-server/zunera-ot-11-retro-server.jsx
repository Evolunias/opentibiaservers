import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-retro-server');
}

export default function ZuneraOt11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-retro-server" />;
}
