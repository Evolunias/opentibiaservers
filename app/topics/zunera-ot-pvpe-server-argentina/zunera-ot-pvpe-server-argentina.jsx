import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvpe-server-argentina');
}

export default function ZuneraOtPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvpe-server-argentina" />;
}
