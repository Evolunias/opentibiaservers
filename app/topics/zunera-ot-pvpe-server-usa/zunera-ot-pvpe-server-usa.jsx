import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvpe-server-usa');
}

export default function ZuneraOtPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvpe-server-usa" />;
}
