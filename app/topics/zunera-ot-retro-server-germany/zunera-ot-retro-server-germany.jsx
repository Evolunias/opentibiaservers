import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-retro-server-germany');
}

export default function ZuneraOtRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-retro-server-germany" />;
}
