import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-baiak-server-chile');
}

export default function ZuneraOtBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-baiak-server-chile" />;
}
