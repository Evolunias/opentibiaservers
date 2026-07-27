import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-retro-server-europe');
}

export default function ZuneraOtRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-retro-server-europe" />;
}
