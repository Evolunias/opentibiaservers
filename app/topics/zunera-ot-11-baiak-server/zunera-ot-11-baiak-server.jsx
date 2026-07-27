import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-baiak-server');
}

export default function ZuneraOt11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-baiak-server" />;
}
