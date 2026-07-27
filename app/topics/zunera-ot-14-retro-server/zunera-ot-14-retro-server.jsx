import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-retro-server');
}

export default function ZuneraOt14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-retro-server" />;
}
