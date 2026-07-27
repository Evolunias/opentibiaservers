import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-4-retro-server');
}

export default function ZuneraOt84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-4-retro-server" />;
}
