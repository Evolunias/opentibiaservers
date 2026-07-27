import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-retro-server-usa');
}

export default function ZuneraOtRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-retro-server-usa" />;
}
