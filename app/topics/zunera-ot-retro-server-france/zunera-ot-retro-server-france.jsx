import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-retro-server-france');
}

export default function ZuneraOtRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-retro-server-france" />;
}
