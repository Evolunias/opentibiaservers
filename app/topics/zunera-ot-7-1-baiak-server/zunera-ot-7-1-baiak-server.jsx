import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-1-baiak-server');
}

export default function ZuneraOt71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-1-baiak-server" />;
}
