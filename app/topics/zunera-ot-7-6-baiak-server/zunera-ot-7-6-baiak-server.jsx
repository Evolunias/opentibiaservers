import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-6-baiak-server');
}

export default function ZuneraOt76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-6-baiak-server" />;
}
