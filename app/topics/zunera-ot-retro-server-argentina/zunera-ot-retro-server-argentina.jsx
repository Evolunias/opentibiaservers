import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-retro-server-argentina');
}

export default function ZuneraOtRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-retro-server-argentina" />;
}
