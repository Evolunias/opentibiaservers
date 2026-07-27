import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-1-retro-server');
}

export default function ZuneraOt81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-1-retro-server" />;
}
