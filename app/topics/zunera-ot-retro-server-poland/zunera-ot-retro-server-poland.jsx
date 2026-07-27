import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-retro-server-poland');
}

export default function ZuneraOtRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-retro-server-poland" />;
}
