import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-13-retro-server');
}

export default function ZuneraOt13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-13-retro-server" />;
}
