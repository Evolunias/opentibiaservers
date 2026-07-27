import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-4-retro-server');
}

export default function ZuneraOt74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-4-retro-server" />;
}
