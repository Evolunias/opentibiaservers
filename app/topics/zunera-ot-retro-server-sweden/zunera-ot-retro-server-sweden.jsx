import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-retro-server-sweden');
}

export default function ZuneraOtRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-retro-server-sweden" />;
}
