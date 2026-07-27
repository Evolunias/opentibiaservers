import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-baiak-server-south-america');
}

export default function ZuneraOtBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-baiak-server-south-america" />;
}
