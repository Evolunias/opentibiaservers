import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-low-exp-server-chile');
}

export default function ZuneraOtLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-low-exp-server-chile" />;
}
