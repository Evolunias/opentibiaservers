import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-baiak-server-argentina');
}

export default function ZuneraOtBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-baiak-server-argentina" />;
}
