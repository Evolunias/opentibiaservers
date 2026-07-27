import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-retro-server-brazil');
}

export default function ZuneraOtRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-retro-server-brazil" />;
}
