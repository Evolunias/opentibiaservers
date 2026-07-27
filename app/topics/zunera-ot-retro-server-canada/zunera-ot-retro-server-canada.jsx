import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-retro-server-canada');
}

export default function ZuneraOtRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-retro-server-canada" />;
}
