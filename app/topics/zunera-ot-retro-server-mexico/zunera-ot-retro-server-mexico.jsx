import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-retro-server-mexico');
}

export default function ZuneraOtRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-retro-server-mexico" />;
}
