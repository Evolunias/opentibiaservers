import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-10-0-retro-server');
}

export default function ZuneraOt100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-10-0-retro-server" />;
}
