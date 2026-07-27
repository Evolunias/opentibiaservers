import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-baiak-server-sweden');
}

export default function ZuneraOtBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-baiak-server-sweden" />;
}
