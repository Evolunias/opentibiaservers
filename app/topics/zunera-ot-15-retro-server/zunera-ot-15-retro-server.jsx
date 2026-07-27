import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-15-retro-server');
}

export default function ZuneraOt15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-15-retro-server" />;
}
