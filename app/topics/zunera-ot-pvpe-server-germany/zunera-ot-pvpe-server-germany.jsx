import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvpe-server-germany');
}

export default function ZuneraOtPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvpe-server-germany" />;
}
