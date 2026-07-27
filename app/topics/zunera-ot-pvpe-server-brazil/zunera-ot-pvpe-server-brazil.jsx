import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvpe-server-brazil');
}

export default function ZuneraOtPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvpe-server-brazil" />;
}
