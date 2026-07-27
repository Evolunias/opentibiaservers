import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvpe-server-chile');
}

export default function ZuneraOtPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvpe-server-chile" />;
}
