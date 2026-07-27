import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-9-6-retro-server');
}

export default function ZuneraOt96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-9-6-retro-server" />;
}
