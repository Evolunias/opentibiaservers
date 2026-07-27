import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-baiak-server-germany');
}

export default function ZuneraOtBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-baiak-server-germany" />;
}
