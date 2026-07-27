import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-12-retro-server');
}

export default function ZuneraOt12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-12-retro-server" />;
}
