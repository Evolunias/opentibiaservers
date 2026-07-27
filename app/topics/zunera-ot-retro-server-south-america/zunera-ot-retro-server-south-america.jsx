import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-retro-server-south-america');
}

export default function ZuneraOtRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-retro-server-south-america" />;
}
