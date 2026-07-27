import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-0-baiak-server');
}

export default function ZuneraOt80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-0-baiak-server" />;
}
